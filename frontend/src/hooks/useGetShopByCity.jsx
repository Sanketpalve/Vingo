import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setShopsInMyCity, setUserData } from '../redux/userSlice'

function useGetShopByCity() {
  const dispatch=useDispatch()
  const {currentCity}=useSelector(state=>state.user)
  useEffect(()=>{
    const fetchShops=async () => {
      try {
        const result=await axios.get(`${serverUrl}/api/shop/get-by-city/${currentCity}`,{withCredentials:true})
        // console.log(result)
        dispatch(setShopsInMyCity(result.data))
        console.log(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchShops()
  },[currentCity])
}

export default useGetShopByCity
