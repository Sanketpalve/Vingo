import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentAddress, setCurrentCity, setCurrentState, setUserData } from '../redux/userSlice.js'
import { setAddress, setLocation } from '../redux/mapSlice.js'

function useGetCity() {
  const apiKey=import.meta.env.VITE_GEOAPIKEY
  const dispatch=useDispatch()
  const {userData}=useSelector(state=>state.user)
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(async (position)=>{
        //console.log(position)
        const latitude=position.coords.latitude
        const longitude=position.coords.longitude
        dispatch(setLocation({lat:latitude,lon:longitude}))
        const result=await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`)
        //console.log(result)
        //console.log(result.data.reults[0].city)
        console.log(result.data)
        dispatch(setCurrentCity(result?.data.results[0].city))
        dispatch(setCurrentState(result?.data?.results[0].state))
        dispatch(setCurrentAddress(result?.data?.results[0].address_line2 || result?.data?.results[0].address_line2))
        // console.log(result?.data?.results[0].city)
        // console.log(result?.data?.results[0].state)
        // console.log(result?.data?.results[0].address_line2)
        dispatch(setAddress(result?.data?.results[0].address_line2))
    })
  },[userData])
}

export default useGetCity
