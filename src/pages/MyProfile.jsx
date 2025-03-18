import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const MyProfile = () => {
  
  const [userData, setUserData] = useState({
    name: 'John Doe',
    img: assets.profile_pic,
    email: 'johndoe@gmail.com',
    phone: '1234567890',
    address: {
      line1: '123, Lorem Ipsum',
      line2: 'Dolor Sit Amet',
      city: 'Lorem Ipsum',
    },
    dob: '2000-01-01',
    gender: 'Male',
  })

  const [edit, setEdit] = useState(false)
  
  return (
    <div className=" flex justify-center items-center m-20">
      <img className="w-100" src={assets.work_in_progress} alt="" />
    </div>
  );
};

export default MyProfile;