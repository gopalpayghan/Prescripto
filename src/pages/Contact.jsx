import React from 'react'
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <section className="container mx-auto px-6 pb-50">
      <p className="text-center text-2xl md:text-3xl font-medium mb-12 text-gray-600">
        CONTACT <span className="font-semibold text-primary">US</span>
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.contact_image}
            alt="Healthcare professionals"
            className="rounded-lg shadow-md max-w-full md:max-w-[80%]"
          />
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Office Info */}
          <div>
            <h3 className="text-lg font-semibold">OUR OFFICE</h3>
            <p className="text-gray-600">54709 Willims Station</p>
            <p className="text-gray-600">Suite 350, Washington, USA</p>
            <p className="text-gray-600">Tel: (415) 555-0132</p>
            <p className="text-gray-600">Email: greatstackdev@gmail.com</p>
          </div>

          {/* Careers Section */}
          <div>
            <h3 className="text-lg font-semibold">CAREERS AT PRESCRIPTO</h3>
            <p className="text-gray-600">
              Learn more about our teams and job openings.
            </p>
            <button className="mt-4 px-6 py-2 cursor-pointer border border-gray-800 text-gray-800 rounded-md hover:bg-primary hover:text-white transition-full ">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;