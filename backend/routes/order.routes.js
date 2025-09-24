import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { getOwnerOrder, getUserOrders, placeOrder } from "../controllers/order.controller.js"

const orderRouter=express.Router()

orderRouter.post("/place-order",isAuth,placeOrder)
orderRouter.get("/user-order",isAuth,getUserOrders)
orderRouter.post("/owner-order",isAuth,getOwnerOrder)

export default orderRouter