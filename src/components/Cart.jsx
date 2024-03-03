import PropTypes from 'prop-types';
import SingleCartItem from './SingleCartItem';
import Nav from './Nav'

const Cart= ({ cartItems, subTotal, shopItems, setShopItems}) => {


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
        <div >
        <Nav/>
            <div className='flex flex-col items-center font-bold text-xl mt-24'>
                <h1>Your Cart</h1>
                {cartItems.length===0 &&<div className='font-red-500'>Oopps! There's nothing in here. </div>}
            </div>

            <div className='flex flex-col m-6'>
                {cartItems.map((item) => (
                    <SingleCartItem key={item.id} item={item} shopItems={shopItems} setShopItems={setShopItems}/>
                ))}
            </div>
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