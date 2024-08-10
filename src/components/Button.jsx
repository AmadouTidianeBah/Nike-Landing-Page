import React from 'react'

const Button = ({label, icon, bgColor, borderColor, textColor, isFull}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        bgColor
          ? `${bgColor} ${borderColor} ${textColor}`
          : "bg-coral-red border-coral-red text-white"
        }
        rounded-full ${isFull && 'w-full'}`
      }
    >
      {label}
      {icon && <img src={icon} alt="" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
}

export default Button