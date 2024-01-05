import { useState } from 'react';
import BooksData from '../routes/Home.jsx'
import NavBar from '../components/Nav.jsx'

function Home () {
    // const [books, setBooks] = useState(BooksData);


    console.log('Im here brother')

    return(
        <div className='home'>
        <NavBar/>
        <div className='bg-indigo-600 w-full h-screen'>

        </div>
        

        </div>
    )
}
export default Home;