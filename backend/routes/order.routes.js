import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { getMyOrders, placeOrder } from "../controllers/order.controller.js"

const orderRouter=express.Router()

orderRouter.post("/place-order",isAuth,placeOrder)
orderRouter.get("/my-order",isAuth,getMyOrders)

export default orderRouter