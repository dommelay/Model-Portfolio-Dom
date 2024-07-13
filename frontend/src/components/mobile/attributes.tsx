import React from 'react'

const AttributesMobile: React.FC = () => {

    return (
        <>
            <div className='mt-5 mb-10'>
                <h1 className='font-libre text-3xl'>Measurements & Details</h1>

                <div className='flex flex-row justify-center mt-7'>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center'>
                        <h3 className='text-white text-xl font-libre mb-2'>Height</h3>
                        <h1 className='text-white text-3xl font-libre'>5'9"</h1>
                    </div>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center mr-3 ml-3'>
                        <h3 className='text-white text-xl font-libre mb-2'>Bust</h3>
                        <h1 className='text-white text-3xl font-libre'>36"</h1>
                    </div>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center'>
                        <h3 className='text-white text-xl font-libre mb-2'>Waist</h3>
                        <h1 className='text-white text-3xl font-libre'>32"</h1>
                    </div>
                </div>

                <div className='flex flex-row justify-center mt-3'>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center'>
                        <h3 className='text-white text-xl font-libre mb-2'>Hips</h3>
                        <h1 className='text-white text-3xl font-libre'>43"</h1>
                    </div>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center mr-3 ml-3'>
                        <h3 className='text-white text-xl font-libre mb-2'>Dress</h3>
                        <h1 className='text-white text-3xl font-libre'>12</h1>
                    </div>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center'>
                        <h3 className='text-white text-xl font-libre mb-2'>Shoe</h3>
                        <h1 className='text-white text-3xl font-libre'>12</h1>
                    </div>
                </div>

                <div className='flex flex-row justify-center mt-3'>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center'>
                        <h3 className='text-white text-xl font-libre mb-2'>Hair</h3>
                        <h1 className='text-white text-3xl font-libre'>Brown</h1>
                    </div>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center mr-3 ml-3'>
                        <h3 className='text-white text-xl font-libre mb-2'>Eye</h3>
                        <h1 className='text-white text-3xl font-libre'>Brown</h1>
                    </div>
                    <div className='bg-black opacity-75 w-24 h-24 flex flex-col items-center justify-center'>
                        <h3 className='text-white text-xl font-libre mb-2'>Skin</h3>
                        <h1 className='text-white text-3xl font-libre'>Light</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AttributesMobile;