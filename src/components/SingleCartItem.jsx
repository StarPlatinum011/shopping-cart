import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SingleCartItem = ({item, shopItems, setShopItems}) => {

    const [qty, setQty] = useState(item.quantity);



    // console.log('checking the item', item)
    const deletItem = () => {
        let {quantity, ...updatedItem} = item;

        console.log(updatedItem, ' this is an updated item.')

        let newItems = shopItems.map((piece)=> 
        piece.name === item.name? updatedItem : piece);

        setShopItems(newItems);
    }

    useEffect(() => {
        let newItems = shopItems.map((piece)=> 
        piece.name === item.name? {...piece, quantity:parseInt(qty)} : piece);
        
        setShopItems(newItems);
    }, [qty]);

    const changeQty = (e) => {
        let newValue = parseInt(e.target.value);
        setQty(newValue);
    }

    return (
        <div className='flex flex-col lg:flex-row gap-10 py-4 px-4 m-4 justify-between  border-2'>
            <div className='flex items-center p-2 gap-4'>
                <img className='w-40 h-full aspect-square object-fit' src={item.image} alt={item.name}/>
                <div className='px-4'>
                    <div className='text font-bold'>{item.name}</div>
                    <div className='text-l font-semibold'>Price: ${item.price}</div>
                </div>
            </div>
            <div className='flex flex-row gap-8 items-center'>
                <h5>Quantity</h5>
                <input className='bg-gray-100 py-2 px-4 h-8' type='number' min='1' value={qty} onChange={changeQty}/>
                <button className='flex items-center btn  bg-red-600 h-8 rounded text-white py-3 px-12 text-white' onClick={deletItem}>Delete</button>
            </div>
        </div>
    );
};

SingleCartItem.propTypes = {
    item: PropTypes.object.isRequired,
    shopItems: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired, 
    })),
    setShopItems:PropTypes.func.isRequired
};

export default SingleCartItem;