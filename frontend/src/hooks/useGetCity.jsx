import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCity, setUserData } from '../redux/userSlice'

function useGetCity() {
  const apiKey=import.meta.env.VITE_GEOAPIKEY
  const dispatch=useDispatch()
  const {userData}=useSelector(state=>state.user)
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(async (position)=>{
        //console.log(position)
        const latitude=position.coords.latitude
        const longitude=position.coords.longitude
        const result=await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`)
        //console.log(result)
        //console.log(result.data.reults[0].city)
        dispatch(setCity(result?.data.reults[0].city))
    })
  },[userData])
}

export default useGetCity
