import NavBar from '../components/Nav.jsx'
import ShopMenu from '../components/ShopMenu.jsx';
import About from '../components/About.jsx';
import Contacts from '../components/Contacts.jsx';
import Footer from '../components/Footer.jsx';
import PropTypes from 'prop-types';

function Home ({shopItems}) {  
    return(
        
        <div>
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
        </div>
    )
}
Home.propTypes = {
    shopItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })),
    
    
  };
export default Home;




