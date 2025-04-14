const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
    "/register",
    [
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('fullname.firstname').notEmpty().withMessage('First name is required'),
        body('fullname.lastname').notEmpty().withMessage('Last name is required'),
        body('vehicle.color').notEmpty().withMessage('Vehicle color is required'),
        body('vehicle.plate').notEmpty().withMessage('Vehicle plate is required'),
        body('vehicle.capacity').isNumeric().withMessage('Vehicle capacity must be a number'),
        body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required'),
    ],
    captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
);

router.get('/profile', authMiddleware.authCapation, captainController.getCapationProfile);

router.get('/logout', authMiddleware.authCapation, captainController.logoutCaptain);

module.exports = router;
