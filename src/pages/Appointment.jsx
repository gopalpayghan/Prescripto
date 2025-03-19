import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';


const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    //getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting new date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the day with index
      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours and minutes
      if (today.getHours() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      };
      
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        //add slots to the array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });
        //increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      };
      //add slots to the state
      setDocSlots(prev => [...prev, timeSlots]);
    };
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/** Show the doctor's details */}
        <div className="flex flex-row gap-4 sm:flex-row">
          <div>
            <img
              className="bg-primary sm:max-w-72 w-full rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border-2 border-gray-400 rounded-lg p-4 py-7 bg-white mx-2 mt-[-80px] sm:mx-0 sm:mt-0">
            {/** Show the doctor's name, degree, experience */}
            <p className="flex text-2xl font-medium items-center text-gray-900 gap-2">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600 text-sm">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/** Show the doctor's About */}
            <div>
              <p className="flex items-center mt-3 gap-1 font-medium text-gray-900 text-sm">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 mt-1 max-w-[700px]">
                {docInfo.about}
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-600">${docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/** Show the available slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-800">
          <p>Booking Slots</p>
          <div className="flex gap-3 mt-4 items-center w-full overflow-x-scroll">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center min-w-16 cursor-pointer py-6 rounded-full ${slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                    }`}
                  key={index}
                >
                  <p>{item[0] && daysofWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              ))}
          </div>

          {/** Show the available time */}
          <div className="flex gap-3 mt-4 items-center w-full overflow-x-scroll">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  className={`text-sm font-light px-5 py-2 flex-shrink-0 cursor-pointer rounded-full ${item.time === slotTime
                      ? "bg-primary text-white"
                      : "border border-gray-300"
                    }`}
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className='px-14 py-3 my-6 bg-primary text-white text-sm font-light rounded-full cursor-pointer'>Book Appointment</button>
        </div>

        {/** Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;