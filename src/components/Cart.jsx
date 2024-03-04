import PropTypes from 'prop-types';
import SingleCartItem from './SingleCartItem';
import Nav from './Nav'
import Footer from './Footer'
import { useState } from 'react';

const Cart= ({ cartItems, subTotal, shopItems, setShopItems}) => {


    const [msg, setMsg] = useState(false);
    // console.log('this is a cart items, ', cartItems, 'and subtotal: ', subTotal)

    let num = 0;

    //utility function to return the total count of item quantity
    let numItems = cartItems.map((item) => {
        num = num + item.quantity;
    })

    //function to round numbers to two decimal place 
    const rountToTwo = (num) => {
        return +(Math.round(num+ "e+2") + "e-2")
    }

    const hst = rountToTwo(subTotal*0.13);
    const total = rountToTwo(hst+subTotal);

    console.log('number '+ numItems)
    return(
        <div className="flex flex-col h-screen justify-between">
            <Nav/>
            <div className='flex flex-col lg:flex-row lg:gap-48 flex-col '>
                <div>
                    <div className='flex flex-col items-center font-bold text-xl lg:mt-24'>
                        
                        {cartItems.length===0 &&<div className='font-red-500 ml-80'>
                        <h1>Your Cart</h1> Oopps! There's nothing in here. </div>}
                    </div>

                    <div className='flex flex-col m-6'>
                        {cartItems.map((item) => (
                            <SingleCartItem key={item.id} item={item} shopItems={shopItems} setShopItems={setShopItems}/>
                        ))}
                    </div>
                </div>
                <div >
                    <div className=' flex flex-col gap-4 lg:mt-36 border-dashed border-2 p-8 font-semibold'>
                        <h2 className='font-bold'>Order Summary:</h2>
                        <div className='flex gap-2'>
                            <p>Total Items: </p>
                            <p>{num}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p>Amount: </p>
                            <p>{rountToTwo(subTotal)}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p>HST (13%):</p>
                            <p>{hst}</p>
                        </div>
                        <div className='flex gap-2  border-2 border-rose-600 p-1 pr-6'>
                            <p>Sub Total: </p>
                            <p>{total}</p>
                        </div>
                    </div>
                    <button className="btn bg-AccentColor w-40 mt-4 text-white px-4 py-2 ml-6 rounded" onClick={() => setMsg(prevState => !prevState)}>Checkout</button>
                    {msg&&<p className='text-green-600 mt-8 font-semibold'>GoOd Purchase, knowledge is power!</p>}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })),
    subTotal: PropTypes.number.isRequired,
    shopItems: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired, 
    })),
    setShopItems:PropTypes.func.isRequired
};

 export default Cart;