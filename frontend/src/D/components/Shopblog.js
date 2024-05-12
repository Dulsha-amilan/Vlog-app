import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer here

export default function CusHome() {
  const [featuredStores, setFeaturedStores] = useState([]);
  const [updateData, setUpdateData] = useState({
    componentID: '',
    description: '',
    contact: '',
    catogory: '',
    join: new Date() // Initialize join with today's date
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedComponentId, setSelectedComponentId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/component')
      .then(response => {
        setFeaturedStores(response.data);
      })
      .catch(error => {
        console.error('Error fetching featured stores:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    if (!selectedComponentId) return;
    axios.put(`http://localhost:5000/component/update/${selectedComponentId}`, updateData)
      .then(response => {
        toast.success(response.data.status);
        setShowModal(false); // Close the modal after successful update
        // Optionally, you can update the component in the state with the updated data
        // Here you may need to fetch the updated data again from the server and update the state accordingly
      })
      .catch(error => {
        console.error('Error updating component:', error);
        toast.error('Error updating component');
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/component/delete/${id}`)
      .then(response => {
        toast.success(response.data.status);
        setFeaturedStores(prevState => prevState.filter(store => store._id !== id));
      })
      .catch(error => {
        console.error('Error deleting component:', error);
        toast.error('Error deleting component');
      });
  };

  const openModal = (id, componentID) => {
    setSelectedComponentId(id);
    setUpdateData(prevState => ({
      ...prevState,
      componentID // Set Component ID for reference
    }));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      <ToastContainer /> {/* Use ToastContainer here */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">View Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStores.map(store => (
            <div key={store._id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src={`http://localhost:5000/images/${store.filepath}`}
                alt="Store Logo"
                className="mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{store.name}</h3>
              <p className="text-gray-600 mb-4 text-center">
                <button onClick={() => openModal(store._id, store.componentID)} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Edit
                </button>
                <button onClick={() => handleDelete(store._id)} className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 ml-2">
                  Delete
                </button>
              </p>
              <Link to={`/component/${store._id}`} className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Visit component
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Component</h3>
                    <div className="mt-5">
                      <div className="mb-4">
                   
                      </div>
                      <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                          type="text"
                          name="description"
                          id="description"
                          value={updateData.description}
                          onChange={handleChange}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                          type="text"
                          name="contact"
                          id="contact"
                          value={updateData.contact}
                          onChange={handleChange}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                      </div>
                      <div className="mb-4">
                        
                        <label class="block mb-2 text-sm font-medium text-gray-900 white:text-dark">Catogory:</label>
  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"id="catogory" name="catogory" 
                          value={updateData.catogory}
                          onChange={handleChange}>
    <option value="">Select catogory</option>
    <option value="React Native">React Native</option>
    <option value="React">React</option>
    <option value="Anguler">Anguler</option>
    <option value="Java">Java</option>
    <option value="Python">Python</option>
  </select>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="join" className="block text-sm font-medium text-gray-700">Join</label>
                        <DatePicker
                          selected={updateData.join}
                          onChange={date => setUpdateData(prevState => ({ ...prevState, join: date }))}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleUpdate} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Update
                </button>
                <button onClick={closeModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
