import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ docId, speciality}) => {

    const { doctors } = useContext(AppContext)
    const navigate = useNavigate()
    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if(doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter(doc => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

  return (
    <div className="flex flex-col items-center my-4 gap-4 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <div className="w-full grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 py-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0, 0);}}
            key={index}
            className="border border-gray-200 overflow-hidden rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="bg-blue-100 " src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center text-center gap-2 text-sm text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedDoctors;