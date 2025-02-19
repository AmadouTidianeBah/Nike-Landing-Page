import React from 'react'
import {headerLogo} from '../assets/images/index'
import {hamburger} from '../assets/icons/index'
import {navLinks} from '../constant/index'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="#">
          <img 
            src={headerLogo} 
            alt="logo" 
            width={180}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
                >
                  {item.label}
                </a>
              </li>
              )
            )
          }
        </ul>

        <div>
          <img src={hamburger} alt="" width={24} height={24} className='hidden max-lg:block' />
        </div>
      </nav>
    </header>
  );
}

export default Nav