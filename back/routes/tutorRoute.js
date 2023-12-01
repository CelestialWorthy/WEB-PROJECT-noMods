const express = require("express");
const tutorRoute = express.Router();

const {
    getTutors,
    getTutorsBySubject
} = require("../Controllers/tutorController");

tutorRoute.get("/tutors", getTutors);
tutorRoute.get("/tutors/:subject", getTutorsBySubject);

module.exports = tutorRoute;
