import PropTypes from 'prop-types';

const Cart= ({ cartItems}) => {

//     return(
//         <div>
//             <div>
//                 <h1>Your Cart</h1>
//                 {cartItems.length===0 &&<div>Cart is empty!</div>}
//             </div>

//             <div>
//                 {cartItems.map((item) => {
//                     <div key={item.id}>
//                         <img src="item.image"/>
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// }

// Cart.propTypes = {
//     cartItems: PropTypes.arrayOf(PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired
//     })),
};

 export default Cart;