import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../Pages/navbar';
import Footer from '../../Pages/footer';

const ComponentDetails = () => {
  const [component, setComponent] = useState(null);
  const { id } = useParams();

  const copyToClipboard = () => {
    const descriptionElement = document.querySelector('.description-content');
    if (descriptionElement) {
      const descriptionText = descriptionElement.textContent;

      navigator.clipboard.writeText(descriptionText)
        .then(() => {
          // Show notification to the user
          alert('Description copied to clipboard!');
        })
        .catch(error => {
          console.error('Error copying to clipboard:', error);
        });
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/component/${id}`)
      .then(response => {
        setComponent(response.data);
      })
      .catch(error => {
        console.error('Error fetching component details:', error);
      });
  }, [id]);

  return (
    <div>
      <Header />
      


<nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="/cushome" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"> Component</a>
      </div>
    </li>
    
  </ol>
</nav>

      {component ? (
        <div>
          <h1 className="text-3xl font-bold mb-8 text-center">{component.catogory} Component</h1>
          
          <h4 className="text-2xl font-bold mb-8 text-left">Code Flow V 1.0</h4>
          <h4 className="text-1xl font-bold mb-8 text-left">Publish Date :- {component.join}</h4>


          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              {/* Your icon buttons */}
              <button onClick={copyToClipboard} className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
               
                <span className="sr-only">Copy Description</span>
              </button>
              <button onClick={copyToClipboard} className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                 
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>
                <span className="sr-only">Another Copy Description</span>
              </button>
            </div>
            <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
              <p className="description-content">{component.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default ComponentDetails;
