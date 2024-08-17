import React from 'react'
import vishuu from '../Assets/image.jpg'
import { Link } from 'react-router-dom'
import resume from '../Assets/My Resume (2) (1).pdf'

function About() {
  return (
    <>
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={vishuu}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-3 sm:p-16 lg:p-24">
            
          <h1 className="text-2xl font-bold a text-blue-600  text-center sm:text-3xl">
            About Us
          </h1>

          <p className="mt-4 text-gray-600">
          Hi, I'm Vishakshi Gupta, a passionate and dedicated software engineer with a strong foundation in full-stack development. I specialize in creating dynamic, user-friendly web applications that not only meet but exceed expectations.

With a deep understanding of both frontend and backend technologies.
          </p>

        
          <div className="flow-root">
  <dl className="-my-3 divide-y divide-gray-100 text-sm mt-10">
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Name</dt>
      <dd className="text-gray-700 sm:col-span-2">Vishakshi gupta</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Profession</dt>
      <dd className="text-gray-700 sm:col-span-2">Software Engineer & Full-Stack Developer</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Education</dt>
      <dd className="text-gray-700 sm:col-span-2"> B.Tech in Computer Science</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Experience</dt>
      <dd className="text-gray-700 sm:col-span-2"> 1 Year in Full-Stack Development</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Contact</dt>
      <dd className="text-gray-700 sm:col-span-2">7905166535</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">LinkedIn</dt>
      <dd className="text-gray-700 sm:col-span-2">https://www.linkedin.com/in/vishakshi-gupta-6715882ba</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">GitHub</dt>
      <dd className="text-gray-700 sm:col-span-2">http://github.com/Vishakshi</dd>
    </div>
    <div className="mt-8 flex gap-16">
  <Link
    to="/contact"
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  >
    Hire Me
  </Link>
  <a
   
    href={resume} 
    download="Vishakshi_Gupta_Resume.pdf" 
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  >
    Download Resume
  </a>
</div>
   
    


  </dl>
</div>
        </div>
        
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About
