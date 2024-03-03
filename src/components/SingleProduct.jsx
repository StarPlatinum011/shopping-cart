import React, { useState } from 'react';
import PropTypes from 'prop-types';


const SingleProduct = ({id, img, name, price, desc, shopItems, setShopItems, setCartCounts}) => {


    const [quantity, setQuantity] = useState(1);

    // console.log(shopItems[id], 'this is a shop items')

    const addQuantity= () => {
        if(Object.prototype.hasOwnProperty.call(shopItems[id],'quantity')) {
            let prevAmount = parseInt(shopItems[id].quantity);
            let total = prevAmount + parseInt(quantity);

            let newShopItems = shopItems.map((item) => 
                item.name===name? {...item, quantity:total}: item
            );

            setShopItems(newShopItems)
        }else{
            let newShopItems = shopItems.map((item) =>
            item.name===name? {...item, quantity:parseInt(quantity)}:item);

            setShopItems(newShopItems);
        }

        setCartCounts((prev)=> prev+1)
        setQuantity(1);        
    }

    return (
        
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-start'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img className='w-80 h-full aspect-square object-fit rounded-xl' src={img} alt={name}/>
                
            </div>
            <div className='flex flex-col gap-4'>
                {/* product description */}
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className='text-gray-700'>{desc}</p>
                    <h6 className='text-2xl font-semibold'> ${price}</h6>

                </div>

                {/* button work */}
                <div className='flex flex-row   gap-8'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-1 px-5 rounded-lg text-secondary-bg text-2xl' onClick={() => setQuantity((prev)=> prev-1) }>-</button>
                        <span className='py-2 px-4 rounded-lg'>{quantity}</span>
                        <button className='bg-gray-200 py-1 px-4 rounded-lg text-secondary-bg text-2xl' onClick={() => setQuantity((prev)=> prev+1)}>+</button>  
                    </div>
                        <button className='btn bg-AccentColor h-full rounded-xl text-white py-3 px-16 text-white' onClick={addQuantity}>Add to cart</button>
                </div>
            </div>
            
        </div>
        
    );
};

SingleProduct.propTypes = {
    shopItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        desc: PropTypes.string.isRequired,
      })),
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    setShopItems: PropTypes.func.isRequired,
    setCartCounts: PropTypes.func.isRequired,
  };

export default SingleProduct;