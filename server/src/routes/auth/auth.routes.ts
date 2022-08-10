import express from 'express'
import httpSignInUsers from './auth.controllers'

const authRoute = express.Router()

authRoute.post('/', httpSignInUsers )

export default authRoute