import express from 'express'
import httpGetUser from './auth.controllers'

const authRoute = express.Router()

authRoute.post('/', httpGetUser )

export default authRoute