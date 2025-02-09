import React from 'react'
import { reviews } from '../constant'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our 
        <span className='text-coral-red'> Custumer</span> Say ?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuise stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((item) => (
          <ReviewCard key={item.customerName} imgUrl={item.imgURL} customerName={item.customerName} rating={item.rating} feedback={item.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews