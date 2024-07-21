const express = require("express")
const router = express.Router()

// Import the Controllers
const {
  createRating,
  getAllRating
} = require("../controllers/RatingAndReview")
const {
  updateCourseProgress
} = require("../controllers/courseProgress");

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course")
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")
// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section")
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")

const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
router.delete("/deleteCourse", deleteCourse)
router.post("/editCourse", auth, isInstructor, editCourse)
router.get("/showAllCategories", showAllCategories)
router.post("/createCourse", auth, isInstructor, createCourse)
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection)
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection)
// Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection)
// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection)
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection)
// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails)
router.post("/getCategoryPageDetails", categoryPageDetails)
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)
router.post("/createRating", auth, isStudent, createRating)
router.get("/getReviews", getAllRating)
router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

module.exports = router