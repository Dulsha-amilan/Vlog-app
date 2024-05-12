import React from 'react';
import Header from './navbar';
import Footer from './footer';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
    <Header />
      {/* Hero Section */}
      <div className="bg-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Welcome to Code Flow</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300 text-center">
          Space for creative codes.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Code Flow</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Welcome to our Code Flow platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           
          </p>
        </div>

        
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            <img src="https://via.placeholder.com/500x350" alt="Gallery" className="rounded-lg" />
            <img src="https://via.placeholder.com/500x350" alt="Gallery" className="rounded-lg" />
            <img src="https://via.placeholder.com/500x350" alt="Gallery" className="rounded-lg" />
            <img src="https://via.placeholder.com/500x350" alt="Gallery" className="rounded-lg" />
            {/* Add more gallery images here */}
          </div>
        </div>
      </div>

      Testimonials Section
    
      <Footer />
    </div>
  );
};

export default AboutUs;