import { useState } from 'react';
import BooksData from '../routes/Home.jsx'
import NavBar from '../components/Nav.jsx'
import ShopMenu from '../components/ShopMenu.jsx';
import About from '../components/About.jsx';
import Contacts from '../components/Contacts.jsx';
import Footer from '../components/Footer.jsx';

function Home () {
    // const [books, setBooks] = useState(BooksData);


    console.log('Im here brother')

    return(
        <div className='home'>
        <NavBar/>
        <div className='bg-slate w-full h-200'>
            <ShopMenu/>
        </div>
        <div className='bg-secondary-bg w-full h-96 mt-16 text-white flex justify-contents-center'>
            <About/>
        </div>
        <div className='w-full h-48'>
            <Contacts/>
        </div>
        <Footer/>

        </div>
    )
}
export default Home;