import { Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SendResponse = (res: Response,msg:any, data: any = { message: "Invalid Request" }, status = 400) => {
    res.status(status).json({ data });
    res.send(msg).json({msg});
}
export default SendResponse;