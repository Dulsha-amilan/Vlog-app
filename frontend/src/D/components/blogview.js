import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../Pages/navbar';
import Footer from '../../Pages/footer';

const BlogDetails = () => {
  const [blog, setblog] = useState(null);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch blog details
    axios.get(`http://localhost:5000/blog/${id}`)
      .then(response => {
        setblog(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
      });

    // // Fetch items associated with the blog
    // axios.get(`http://localhost:5000/item/blog/${id}`)
    //   .then(response => {
    //     setItems(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching items:', error);
    //   });
  }, [id]);

  return (
    <div>
       <Header />
      {blog ? (
        <div >
           <h1 className="text-3xl font-bold mb-8 text-center">{blog.description} blog</h1>
          <h2>Our Products</h2>
          <p>{blog.description}</p>
          <h3>Items in this blog:</h3>
      
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
           <Footer />
    </div>
  );
};

export default BlogDetails;
