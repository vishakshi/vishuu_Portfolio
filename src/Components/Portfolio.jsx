import React from 'react'
import img1 from '../Assets/todoapp1.png'
import img2 from '../Assets/todoapp2.png'
import img3 from '../Assets/chatapp2.png'
import img4 from '../Assets/chatapp1.png'
import img5 from '../Assets/ecommerse1.png'
import img6 from '../Assets/voice1.jpg'
import img7 from '../Assets/voice2.jpg'

function Portfolio() {
  return(
    <>
    <section className="bg-white text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl text-blue-900 font-bold font-serif sm:text-6xl">Work</h2>

      <p className="mt-4 text-blue-900 font-serif text-3xl">
      Crafting Digital Experiences: My Work Portfolio
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <a href="https://todore-act-app-k1wz.vercel.app/" className="group relative block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src={img1}
      alt="todoapp"
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={img2}
      alt="todoapp"
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-large text-black">My Todo App</h3>

    <p className="mt-1.5 text-pretty text-xs text-black">
    A simple yet powerful app to organize and prioritize your daily tasks.
    </p>

    <span
      className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      View
    </span>
  </div>
</a>
<a href="#" className="group relative block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
    src={img4}
      
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={img3}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white">Real-Time Chat Application</h3>

    <p className="mt-1.5 text-pretty text-xs text-white">
    Seamlessly connect and chat with others in real-time, anywhere, anytime.
    </p>

    <span
      className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      View
    </span>
  </div>
</a>
<a href="#" className="group relative block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src={img5}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={img5}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-black"> E-Commerce Website</h3>

    <p className="mt-1.5 text-pretty text-xs text-black">
    A modern platform for browsing, selecting, and purchasing products with ease.
    </p>

    <span
      className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      View
    </span>
  </div>
</a>
<a href="#" className="group relative block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src={img6}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={img7}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-black">AI-Powered Assistant</h3>

    <p className="mt-1.5 text-pretty text-xs font-border-box text-black">
    Interact with your device using voice commands for a hands-free experience.
    </p>

    <span
      className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      View
    </span>
  </div>
</a>



    </div>
  </div>
</section>
    </>
  )
}
export default Portfolio

