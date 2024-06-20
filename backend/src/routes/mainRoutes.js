//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const express = require('express');

const teachersRoutes = require('./teachersRoutes');
// const studentsRoutes = require('./studentsRoutes');
// const materialsRoutes = require('./materialsRoutes');
// const worksheetsRoutes = require('./worksheetsRoutes');

//////////////////////////////////////////////////////
// CREATE ROUTER
//////////////////////////////////////////////////////
const router = express.Router();

//////////////////////////////////////////////////////
// DEFINE ROUTES
//////////////////////////////////////////////////////

// Route for user login, including middleware for authentication and token generation
// router.post("/login", userController.login, bcryptMiddleware.comparePassword, jwtMiddleware.generateToken, jwtMiddleware.sendToken);

// // Route for user registration, including middleware for checking duplicate username/email, password hashing, user creation, points creation, and token generation
// router.post("/register", userController.checkUsernameOrEmailExist, bcryptMiddleware.hashPassword, userController.register, userController.createPoints, jwtMiddleware.generateToken, jwtMiddleware.sendToken);

//////////////////////////////////////////////////////
// DEFINE ROUTES
//////////////////////////////////////////////////////

// Using other route modules for specific features
router.use("/teachers", teachersRoutes);
// router.use("/students", studentsRoutes);
// router.use("/materials", materialsRoutes);
// router.use("/worksheets", worksheetsRoutes);

//////////////////////////////////////////////////////
// EXPORT ROUTER
//////////////////////////////////////////////////////
module.exports = router;