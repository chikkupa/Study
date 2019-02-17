const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongo-exercises")
    .then('Connected to MongoDB')
    .catch('Error connecting to database');

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date : { type: Date, default : Date.now},
    isPublished : Boolean,
    price : Number,
    __v : Number 
});

const Course = new mongoose.model('Course', courseSchema);

async function getCourses() {
    const courses = await Course.find({isPublished : true})
                            .sort({name : 1})
                            .select({name: 1, author : 1, _id : 0});
    console.log(courses);
}

getCourses();