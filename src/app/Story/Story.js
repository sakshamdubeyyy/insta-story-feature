import React from 'react'

export const Story = ({img, username}) => {
  return (
    <div>
        <div className='bg-gradient-to-tr from-yellow-500 to-red-600 p-[1.5px] rounded-full'>
            <div className='bg-white rounded-full p-1'>
                <img src={img} className='h-14 w-14 rounded-full cursor-pointer' alt='avatar' />
            </div>
        </div>
        <p className='text-xs w-16 truncate text-center'>{username}</p>
    </div>
  )
}
