import React from 'react'


const NavMobile: React.FC = () => {

    return (
        <>
        <div className='h-16 sticky bottom-0 z-50 bg-black opacity-75 flex flex-row items-center justify-center'>
            <h1 className='font-libre text-white text-lg mr-4'>Digitals</h1>
            <h1 className='font-libre text-white text-lg mr-4'>Attributes</h1>
            <h1 className='font-libre text-white text-lg mr-4'>Shoots</h1>
            <h1 className='font-libre text-white text-lg'>Contact</h1>
        </div>
        </>
    )

}

export default NavMobile;