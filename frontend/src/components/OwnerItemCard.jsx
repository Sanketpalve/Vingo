import React from 'react'
import { data } from 'react-router-dom'
import { FaPen } from "react-icons/fa";

function OwnerItemCard() {
  return (
    <div className='flex bg-white rounded-lg shadow-md overflow-hidden border border-[#ff4d2d] w-full max-w-2xl'>
      <div className='w-36 h-full flex-shrink-0 bg-gray-50'>
        <img src={data.image} className='w-full h-full object-cover'/>
      </div>
      <div className='flex flex-col justify-between p-3 flex-1'>
            <div>
                <h2 className='text-base font-semibold text-[#ff4d2d]'>{DataTransfer.name}</h2>
                <p><span className='font-medium text-gray-70'>Category:</span> {data.category}</p>
                <p><span className='font-medium text-gray-70'>Food Type:</span> {data.foodType}</p>
            </div>

            <div>
              <div><span>Price:</span>{data.price}</div>
                <FaPen />
            </div>
      </div>
    </div>
  )
}

export default OwnerItemCard
