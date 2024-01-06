import React from 'react';
import Meditation from '../assets/meditations-14.jpg';
import Obstacle from '../assets/obstacle.jpg';
import Prince from '../assets/prince.jpg';
import Sapiens from '../assets/sapiens.jpg'

const ShopMenu = () => {
    return (
        <div className='flex mt-40 justify-items-center pl-8 ml-24'>
            <div className='flex flex-col items-center gap-3'>
                <img className='object-contain h-48 w-96' src={Meditation}/>
                <div className='font-semibold text-xl'> $20<span className='text-base'> Meditations</span></div>
                <button className='btn bg-AccentColor rounded py-1 px-3 text-white'>Add to cart</button>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <img className='object-contain h-48 w-96' src={Obstacle}/>
                <div className='font-semibold text-xl'> $14<span className='text-base'> Subtle Art</span></div>
                <button className='btn bg-AccentColor rounded py-1 px-3 text-white'>Add to cart</button>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <img className='object-contain h-48 w-96' src={Prince}/>
                <div className='font-semibold text-xl'> $8 <span className='text-base'> The Prince</span></div>
                <button className='btn bg-AccentColor rounded py-1 px-3 text-white'>Add to cart</button>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <img className='object-contain h-48 w-96' src={Sapiens}/>
                <div className='font-semibold text-xl'>$30<span className='text-base'> Sapiens</span></div>
                <button className='btn bg-AccentColor rounded py-1 px-3 text-white'>Add to cart</button>               
            </div>
        </div>
    );
};

export default ShopMenu;