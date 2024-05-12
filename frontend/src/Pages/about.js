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
          <h1 className="text-4xl font-bold text-white text-center">About Code Flow</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300 text-center">
          Space for creative codes.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Code Flow</h2>
          <p>
          Welcome to Code Flow, where coding becomes a collaborative journey of innovation and growth. Code Flow is more than just a platform. it's a dynamic ecosystem designed to streamline the way developers share, collaborate, and succeed together.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           <h4>Our Mission</h4>
           At Code Flow, our mission is to revolutionize the way developers work by providing a seamless platform for code sharing and collaboration. We're dedicated to empowering developers of all levels to unleash their creativity, learn from one another, and build amazing things together.

          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           <h4>What We Offer</h4>
           Effortless Code Sharing: Share your code snippets, and solutions effortlessly with the Code Flow community. Whether you're a beginner or an expert, your contributions are valued and celebrated.

          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           <h4>Our Vision</h4>
           At Code Flow, we envision a future where collaboration fuels innovation and drives progress in the world of web development. By fostering a culture of collaboration, creativity, and continuous learning, we aim to empower developers to reach new heights and unlock their full potential.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           <h4>Join the Flow</h4>
           Whether you're a seasoned developer or just starting out on your coding journey, Code Flow 
welcomes you with open arms. Join our thriving community today and experience the power of collaborative coding firsthand. Together, let's flow towards a brighter future in web development.

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