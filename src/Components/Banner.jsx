import React from 'react'
import banner from '../Assets/banner.webp'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <>
    
<section
   className="relative bg-cover bg-center bg-no-repeat"
   style={{ backgroundImage: `url(${banner})` }}
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white font-serif sm:text-5xl">
        Hey,I'm Vishakshi

        <strong className="block  font-serif text-rose-500"> Full Stack Developer </strong>
      </h1>

      <p className="mt-4 max-w-lg font-bold font-serif text-white sm:text-4xl/relaxed">
      From Frontend Aesthetics to Backend Logic,
I Build Seamless Digital Solutions.
      </p>

      <div className="mt-8 flex  font-serif flex-wrap gap-4 text-center">
        <Link
          to="contact"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Hire me 
        </Link>

        <Link
          to="/contact"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Contact me
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Banner
