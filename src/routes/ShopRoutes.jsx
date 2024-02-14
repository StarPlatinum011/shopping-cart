import { useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from  '../Container/Home.jsx'
import Cart from '../components/Cart.jsx'
import SpecificItem  from '../Container/SpecificItem.jsx';
import data from '../components/BooksData.jsx';
import { ItemContext } from '../components/ItemContext.jsx'


const Router = () => {


     //init states
     const [shopItems, setShopItems] = useState(data);
     const [cartItems, setCartItems] = useState([]);
     const [subTotal, setSubTotal] = useState(0);

     useEffect(()=> {
         let total = 0;
 
         //Filter the null and empty values from the array
         let newCartItems = shopItems.filter((item)=> Boolean(item.quantity));
 
         newCartItems.map((item) => {
             total = total + item.quantity * item.price;
         })
 
         setSubTotal(total);
 
     },[shopItems])

    //  <ItemContext.Provider value={{cartItems, setCartItems, shopItems, setShopItems, subTotal}}>
    const router = createBrowserRouter([

        {
            path:'/',
            element: <Home shopItems={shopItems}/>,
        },
        {
            path:'/cart',
            element: <Cart cartItems={cartItems}/>
        },
        {
            path: '/items/:id',
            element: <SpecificItem shopItems={shopItems}/>
        },

    ])
    return <RouterProvider router={router}/>
    // </ItemContext.Provider>

}




export default Router;