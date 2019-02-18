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
    return await Course.find()
                            .or([{title : /.*by.*/i}, {price : { $gte : 15}}])
                            .sort({name : 1})
                            .select({name: 1, author : 1, price: 1, _id : 0});
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();