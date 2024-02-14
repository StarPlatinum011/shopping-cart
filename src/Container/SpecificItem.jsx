import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { ItemContext } from '../components/ItemContext';
import Navbar from '../components/Nav';
import Footer from '../components/Footer.jsx';
import PropTypes from 'prop-types';


const SpecificItem = ({shopItems}) => {
    // const {shopItems} = useContext(ItemContext)
    const [cartCount, setCartCount] = useState(0);

    //retrieve name data from ShopMenu 
    const location = useLocation();
    const {name} = location.state;

    let selectedItem = shopItems.filter((item) => item.name === name);

    console.log(selectedItem, 'this is coming from specific items');

    return (
        <div>
        <Navbar cartCount={cartCount}/>



        <Footer/>
        </div>
    );
};

SpecificItem.propTypes = {
    shopItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })),
    
    
  };

export default SpecificItem;