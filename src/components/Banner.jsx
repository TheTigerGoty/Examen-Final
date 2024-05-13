import React from 'react'

export const Banner = () => {
    return (
        <div className='flex space-x-[104px] items-center justify-center '>
            <div className='space-y-4 w-[657px] h-[192px]'>
                <h1 className='text-6xl font-bold'>Lessons and insights
                    <span className='text-[#4CAF4F]'> from 8 years</span>
                </h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
            </div>

            <img src="./../../assets/Banner.png" alt="Banner" className='my-[96px]' />
        </div>
    )
}
