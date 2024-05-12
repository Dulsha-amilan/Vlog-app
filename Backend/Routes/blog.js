const router =  require("express").Router();
let component = require("../Model/blog");

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

    const componentID = req.body.componentID;
    const description = req.body.description;
    const filepath = req.file.filename;
    const contact = Number( req.body.contact);
    const catogory = req.body.catogory;
    const join = req.body.join;

    const newcomponent = new component({
        componentID,
        description,
        filepath,     
        contact,
        catogory,
        join
        
    })

    console.log(req.file)

    newcomponent.save().then(()=>{
        res.json("component Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    component.find().then((component)=>{
        res.json(component)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const{componentID,description, filepath,contact,catogory,join} = req.body;

    const updatecomponent = {
        componentID,
        description,
        filepath,
        contact,
        catogory,
        join
    }

    const update = await component.findByIdAndUpdate(userId,updatecomponent)
    .then(() =>{
        res.status(200).send ({status: "User updated"})

    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updatingh data"});
    })
})

router.route("/delete/:id").delete(async (req , res) => {
    let userId = req.params.id;

    await component.findByIdAndDelete(userId)
     .then(() =>{
        res.status(200).send({status:" component deleted "});
     }).catch ((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with delete component", error: err.message});
     })
})



router.route("/:id").get(async (req, res) => {
    try {
        const fetchedcomponent = await component.findById(req.params.id);
        if (!fetchedcomponent) {
            return res.status(404).send({ error: "component not found. Unable to retrieve component details." });
        }
        res.json(fetchedcomponent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: "Error getting component details. Please try again later." });
    }
});






router.route("/count").get(async (req, res) => {
    try {
        const count = await component.countDocuments();
        res.json({ count });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: "Error getting component count" });
    }
});

module.exports = router;