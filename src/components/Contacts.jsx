import React from 'react';

const Contacts = () => {
    return (
        <div className='flex flex-col items-center mt-12 gap-6 justify-contents'>
            <h1 className='font-bold text-secondary-bg text-xl'>Let's get connected!</h1>
            <div className='flex gap-3'>
                <input className='shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="username" type="text" placeholder='example@.com'/>
                <buttton className='bg-AccentColor hover:bg-secondary-bg cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Subscribe</buttton>
            </div>
            
        </div>
    );
};

export default Contacts;


