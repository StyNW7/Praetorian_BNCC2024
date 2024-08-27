import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (

    <div className="container mx-auto p-4 text-center pb-20">

      <h1 className="text-4xl font-bold mb-8 text-blue-600">About WorldUniversity</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Platform Description</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          WorldUniversity is an innovative platform developed by PT World University to help students gain in-depth information about various countries worldwide. With a user-friendly interface, we provide comprehensive data on countries, including flags, locations, and other essential information.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Vision and Mission</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-400">Vision</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            To become the leading global platform that facilitates education and knowledge about countries worldwide, simplifying information access and enhancing global awareness among students.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-400">Mission</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            1. Provide accurate and up-to-date country data. <br />
            2. Enhance global understanding among students through easily accessible information. <br />
            3. Encourage exploration and research on various countries and cultures.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-blue-500">Developer</h2>
        <div className="flex justify-center gap-10">
          <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
            <img src="assets/PP (1).png" alt="Team Member 1" className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Stanley Nathanael Wijaya</h3>
            <Link to={`https://bento.me/snw77`} target='blank' className="text-blue-500 hover:underline">Portfolio</Link>
          </div>
        </div>
      </section>

    </div>
    
  );
};

export default About;
