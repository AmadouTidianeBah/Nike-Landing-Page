import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../constant';

const Footer = () => {
  return (
    <footer className="max-container" id='footer'>
      <div className="flex justify-between items-start gap-2 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-white-400 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards
          </p>
        </div>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((item) => (
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={item.src} alt={item.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer