import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="text-center text-3xl font-medium text-gray-600">
        <p>
          ABOUT <span className="font-semibold text-primary">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt="About Us"
          className="w-full md:max-w-[360px] rounded-lg"
        />
        <div className="flex flex-col gap-6 justify-center text-gray-600">
          <p className="mb-4">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="mb-4">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-lg text-gray-700">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 pb-10">
        <h3 className="text-2xl font-bold text-center mb-6">
          WHY <span className="text-primary">CHOOSE US</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all">
            <h4 className="text-lg font-bold">EFFICIENCY:</h4>
            <p className="mt-2 text-md">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all">
            <h4 className="text-lg font-bold">CONVENIENCE:</h4>
            <p className="mt-2 text-md">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all">
            <h4 className="text-lg font-bold">PERSONALIZATION:</h4>
            <p className="mt-2 text-md">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;