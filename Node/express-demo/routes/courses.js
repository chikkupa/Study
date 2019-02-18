const express = require('express');
const router = express.Router();

let courses = [
    {id : 1, name : "AngularJS", date : "04/02/2019"},
    {id : 2, name : "NodeJS", date : "10/02/2019"},
    {id : 3, name : "MongoDB", date : "14/02/2019"}
];

router.get("/", (req, res) => {
    res.send(courses);
});

router.get("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course){
        let response = {
            status : 404,
            message : "Course not found!"
        }
        return res.status(404).send(response);
    }
    res.send(course);
});

router.post("/", (req, res) => {
    // Validation
    const { error } = validateCourse(req.body)

    if(error){
        res.status(400).send({
            status : 400,
            message : error.details[0].message
        });
        return;
    }
    const course = {
        id : courses.length + 1,
        name : req.body.name,
        date : req.body.date
    }

    courses.push(course);
    res.send(course);
});

router.put("/:id", (req, res) => {
    // Checking wether the course exists
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course){
        let response = {
            status : 404,
            message : "Course not found!"
        }
        return res.status(404).send(response);
    }

    // Validation
    const { error } = validateCourse(req.body);

    if(error){
        res.status(400).send({
            status : 400,
            message : error.details[0].message
        });
        return;
    }

    course.name = req.body.name;
    course.date = req.body.date;

    res.send(course);
});

router.delete('/:id', (req, res) => {
    // Checking wether the course exists
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course){
        let response = {
            status : 404,
            message : "Course not found!"
        }
        return res.status(404).send(response);
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course){
    // Validation
    const schema = {
        name : Joi.string().min(3).required(),
        date : Joi.string().required()
    }

    return Joi.validate(course, schema);

}

module.exports = router;