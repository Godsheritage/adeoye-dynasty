import express from 'express'
import httpSignInUsers from './auth.controllers'
import {check} from 'express-validator'

const authRoute = express.Router()

authRoute.post('/', [check("username").notEmpty(), check("password").isLength({min:8}).custom((val) => /[^A-za-z0-9\s]/g.test(val))], httpSignInUsers )

export default authRoute