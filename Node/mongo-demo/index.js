const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nodedemo")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting MongoDB"));

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date : { type : String, default : Date.now },
    isPublished : Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name : "Angular",
        author : "Mosh",
        tags : ["Angular", "Frontend"],
        isPublished : true
    });

    const result = await course.save();
    console.log(result);
}

async function getCouses(){
    const courses = await Course.find({ author : 'Mosh', isPublished : true})
                            .limit(10)
                            .sort({name : 1})
                            .select({name : 1, tags: 1, _id : 0});
    console.log(courses);
}

getCouses();