import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMyOrders, setUserData } from '../redux/userSlice'

function useGetMyOrders() {
  const dispatch=useDispatch()
  const {userData}=useSelector(state=>state.user)

  useEffect(()=>{
    const fetchOrders=async () => {
      try {
        const result=await axios.get(`${serverUrl}/api/order/my-orders`,{withCredentials:true})
        // console.log(result)
        dispatch(setMyOrders(result.data))
      } catch (error) {
        if (axios.isCancel(error)) return
        console.log(error)
      }
    }
    fetchOrders()
  },[userData])
}

export default useGetMyOrders
