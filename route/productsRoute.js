// import { Router } from 'express';
// import { findAll } from "../controller/productsController";
// import controller from '../controller/productsController';
const express = require('express');
const router = express.Router();
const controller = require('../controller/productsController');


router.get('/products', controller.findAll);


module.exports = router;