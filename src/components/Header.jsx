import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-between items-center ml-[105px] mr-[169px] font-medium'>
            <img src="./../../assets/Logo.png" alt="Logo" className='my-[30px] h-6'/>

            <div className='space-x-[50px]'>
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Feature</a>
                <a href="#">Product</a>
                <a href="#">Testimonial</a>
                <a href="#">FAQ</a>
            </div>
        </div>
  )
}



