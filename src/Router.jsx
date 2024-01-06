import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from  './routes/Home.jsx'
import Cart from './routes/Cart.jsx'
import Contacts from './components/Contacts.jsx';
const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home />,
        },
        {
            path:'cart',
            element: <Cart />
        },
    
    ])
    return <RouterProvider router={router}/>

}

export default Router;