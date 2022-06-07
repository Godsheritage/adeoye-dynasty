import express from 'express'
import httpGetUser from './auth.controllers'

const authRoute = express.Router()

authRoute.get('/', httpGetUser )

export default authRoute