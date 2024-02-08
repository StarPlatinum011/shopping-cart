import { useEffect, useState } from 'react';
import NavBar from '../components/Nav.jsx'
import ShopMenu from '../components/ShopMenu.jsx';
import About from '../components/About.jsx';
import Contacts from '../components/Contacts.jsx';
import Footer from '../components/Footer.jsx';
import data from '../components/BooksData.jsx';
import { ItemContext } from '../components/ItemContext.jsx'
function Home () {
    //init states
    const [cartItems, setCartItems] = useState([]);
    const [shopItems, setShopItems] = useState(data);
    const [subTotal, setSubTotal] = useState(0);

    // const [meditationCount, setMeditationCount] = useState(0);

    useEffect(()=> {
        let total = 0;


        //Filter the null and empty values from the array
        let newCartItems = shopItems.filter((item)=> Boolean(item.quantity));

        // console.log(shopItems, 'idk if this will print or not')
        newCartItems.map((item) => {
            total = total + item.quantity * item.price;
        })

        setSubTotal(total);

    },[shopItems])

    return(
        
        <div>
            <ItemContext.Provider value={{cartItems, setCartItems, shopItems, setShopItems, subTotal}}>
                <NavBar/>
                <div className='bg-slate w-full h-200'>
                    <ShopMenu shopItems={shopItems}/>
                </div>
                <div className='bg-secondary-bg w-full h-96 mt-16 text-white flex justify-contents-center'>
                    <About/>
                </div>
                <div className='w-full h-48'>
                    <Contacts/>
                </div>
                <Footer/>
            </ItemContext.Provider>
        </div>
    )
}
export default Home;