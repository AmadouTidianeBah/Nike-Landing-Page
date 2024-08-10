import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgUrl, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgUrl} alt="avatar" className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-3'>
            <img src={star} alt="start" width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl font-montserrat text-slate-gray'>4.3</p>
        </div>
        <h3 className='mt-2 font-palanquin text-3xl font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard