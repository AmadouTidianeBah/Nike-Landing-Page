import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us part.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate to realm of possibilities design to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptionnal.
        </p>
        <div className="mt-11 flex flex-wrap gap-6">
          <Button label="View Detail" icon={arrowRight} />
          <Button
            label="Learn more"
            bgColor="bg-white"
            borderColor="border-slite-gray"
            textColor="text-slite-gray"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer