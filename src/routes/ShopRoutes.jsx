import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from  '../Container/Home.jsx'
import Cart from '../components/Cart.jsx'
import SpecificItem  from '../Container/SpecificItem.jsx';


const Router = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home />,
        },
        {
            path:'/cart',
            element: <Cart/>
        },
        {
            path: '/items/:id',
            element: <SpecificItem/>
        }
    
    ])
    return <RouterProvider router={router}/>

}



export default Router;