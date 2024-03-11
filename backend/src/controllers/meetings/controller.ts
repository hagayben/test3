import { NextFunction, Request, Response } from "express";
import getModel from "../../models/meetings/factory";
import { StatusCodes } from "http-status-codes";

export const getByGroups = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const meetings = await getModel().getByGroups(+req.params.groupsId)
        res.json(meetings);
    } catch (err) {
        next(err)
    }
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newMeet = await getModel().add(req.body)
        res.status(StatusCodes.CREATED).json(newMeet);
    } catch (err) {
        next(err)
    }
}