import React from 'react'
import { services } from '../constant'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex flex-wrap justify-center gap-9'>
      {services.map((item) => (
        <ServiceCard key={item.label} imgUrl={item.imgURL} label={item.label} subtext={item.subtext}/>
      ))}
    </section>
  )
}

export default Services