import { useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from  '../Container/Home.jsx'
import Cart from '../components/Cart.jsx'
import SpecificItem  from '../Container/SpecificItem.jsx';
import data from '../components/BooksData.jsx';
// import { ItemContext } from '../components/ItemContext.jsx';


const Router = () => {


     //init states
     const [shopItems, setShopItems] = useState(data);
     const [cartItems, setCartItems] = useState([]);
     const [subTotal, setSubTotal] = useState(0);

     useEffect(()=> {
         let total = 0;
 
         //Filter the null items that does not contains quantity
         let newCartItems = shopItems.filter((item)=> Boolean(item.quantity));
 
         newCartItems.map((item) => {
             total = total + item.quantity * item.price;
         })
         console.log('new cart updates: ', newCartItems)

 
         setSubTotal(total);
         setCartItems(newCartItems);
 
     },[shopItems]);

     console.log(' cart : ', cartItems)

     
    const router = createBrowserRouter([

        {
            path:'/',
            element: <Home shopItems={shopItems}/>,
        },
        {
            path:'/cart',
            element: <Cart cartItems={cartItems} subTotal={subTotal} shopItems={shopItems} setShopItems={setShopItems}/>
        },
        {
            path: '/items/:id',
            element: <SpecificItem shopItems={shopItems} setShopItems={setShopItems}/>
        },

    ])
    return <RouterProvider router={router}/>

}




export default Router;