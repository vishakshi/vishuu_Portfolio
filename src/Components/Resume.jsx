// Components/Resume.js
import React from 'react';

function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Vishakshi Gupta</h1>
        <p className="text-lg">Software Engineer</p>
        <p className="text-md">Email: Vishakshigupta2202@gmail.com | Phone: 7905166535 | Kanpur, India</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-4">Summary</h2>
        <p className="text-gray-700">
          As a highly motivated and detail-oriented computer science major, my passion for learning and developing responsive and intuitive
          websites drives me to excel in cross-functional teams. Seeking to apply my skills to solve complex challenges and contribute to
          organizational success with creative solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">BTECH</h3>
          <p className="text-gray-600">Allenhouse Institute of Technology (09/2021 - 09/2025, 82%)</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Intermediate</h3>
          <p className="text-gray-600">Oxford Senior Secondary School (04/2020 - 04/2021, 86%)</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">High School</h3>
          <p className="text-gray-600">Oxford Senior Secondary School (04/2017 - 04/2018, 85%)</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-4">Work Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Frontend Intern</h3>
          <p className="text-gray-600">Androcoder (04/2024 - 07/2024, Kanpur)</p>
          <ul className="list-disc list-inside ml-4">
            <li>Developed websites using React, resulting in improved user experience and increased engagement.</li>
            <li>Advised on test coverage, security, performance, and architecture using standards-compliant Web (HTML, CSS, JavaScript).</li>
            <li>Collaborated with the team to design and implement new user interfaces improving the user experience.</li>
            <li>Designed, developed, tested, and debugged webpages for improved site performance and increased customer retention.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-4">Training</h2>
        <div className="mb-2">
          <p className="text-gray-600">Li-Mat Solutions Pvt Ltd (09/2022 - 12/2022): Training in Python</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-600">Lakshya IT Solutions (09/2023 - 11/2023): Completed training in OOPs with Java</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-600">Udemy (05/2022 - 06/2022): Completed Full Stack Web Development training</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-4">Skills</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Frontend: HTML/CSS/JavaScript, React</li>
          <li>Backend: Node.js, Python, Java</li>
          <li>Database: MongoDB</li>
          <li>Data Structures, PHP</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-4">Personal Projects</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">MERN E-commerce Website (04/2022 - 05/2022)</h3>
          <p className="text-gray-600">Developed a full-stack e-commerce application using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
          <p className="text-gray-600">Implemented robust user authentication and authorization with password hashing and token-based authentication.</p>
          <p className="text-gray-600">Deployed the application to cloud platforms (Vercel, Netlify) for scalability and accessibility.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Real-Time Chat Application (04/2024 - 05/2024)</h3>
          <p className="text-gray-600">Developed a robust real-time chat application using MERN stack technologies.</p>
          <p className="text-gray-600">Implemented user authentication and authorization with a secure token-based system.</p>
          <p className="text-gray-600">Successfully deployed the application to a cloud platform for accessibility and reliability.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">AI Virtual Voice Assistant (02/2022 - 03/2022)</h3>
          <p className="text-gray-600">Developed a comprehensive AI voice assistant using Python, incorporating natural language processing (NLP) techniques.</p>
          <p className="text-gray-600">Implemented speech recognition and text-to-speech functionalities for seamless user interaction.</p>
          <p className="text-gray-600">Integrated with various APIs (e.g., Google Search, Weather, Music) to provide informative and engaging responses.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-4">Achievements</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Frontend Developer Intern at Androcoder (04/2024 - 07/2024)</li>
          <li>Certificate of Excellence in Web Development by Internshala</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-4">Interests</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Reading about prevailing technological trends</li>
          <li>Programming</li>
          <li>Traveling</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
