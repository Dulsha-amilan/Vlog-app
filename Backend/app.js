const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
const cors = require('cors'); // Import cors package

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;
const bodyParser = require("body-parser");
// Middleware
app.use(express.json());
app.use(cors()); // Allow all origins for now, you can configure it more restrictively
app.use(bodyParser.json());
app.use('/images', express.static('images'));

const userRoutes = require("./Routes/Users");
app.use("/api/users",userRoutes);
const authRoutes = require("./Routes/auth");
app.use("/api/auth",authRoutes);

const blogRouter = require("./Routes/blog");
app.use("/component", blogRouter);


const ContactUs=require("./Routes/ContactUsrouter");
app.use("/contactus",ContactUs);




// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
