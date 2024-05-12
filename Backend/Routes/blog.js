const router =  require("express").Router();
let blog = require("../Model/blog");

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter })


router.route("/add").post(upload.single("filepath"),(req,res)=>{

    const blogID = req.body.blogID;
    const description = req.body.description;
    const filepath = req.file.filename;
    const contact = Number( req.body.contact);
    const catogory = req.body.catogory;
    const join = req.body.join;

    const newblog = new blog({
        blogID,
        description,
        filepath,     
        contact,
        catogory,
        join
        
    })

    console.log(req.file)

    newblog.save().then(()=>{
        res.json("blog Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    blog.find().then((blog)=>{
        res.json(blog)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const{blogID,description, filepath,contact,catogory,join} = req.body;

    const updateblog = {
        blogID,
        description,
        filepath,
        contact,
        catogory,
        join
    }

    const update = await blog.findByIdAndUpdate(userId,updateblog)
    .then(() =>{
        res.status(200).send ({status: "User updated"})

    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updatingh data"});
    })
})

router.route("/delete/:id").delete(async (req , res) => {
    let userId = req.params.id;

    await blog.findByIdAndDelete(userId)
     .then(() =>{
        res.status(200).send({status:" blog deleted "});
     }).catch ((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with delete blog", error: err.message});
     })
})



router.route("/:id").get(async (req, res) => {
    try {
        const fetchedBlog = await blog.findById(req.params.id);
        if (!fetchedBlog) {
            return res.status(404).send({ error: "Blog not found. Unable to retrieve blog details." });
        }
        res.json(fetchedBlog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: "Error getting blog details. Please try again later." });
    }
});






router.route("/count").get(async (req, res) => {
    try {
        const count = await blog.countDocuments();
        res.json({ count });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: "Error getting blog count" });
    }
});

module.exports = router;