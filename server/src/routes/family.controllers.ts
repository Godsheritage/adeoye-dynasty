import { RequestHandler } from "express";

export const httpGetFamilyMembers:RequestHandler = (req, res) => {
    return res.status(200).json()

}