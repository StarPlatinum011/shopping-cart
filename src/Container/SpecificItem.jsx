import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { ItemContext } from '../components/ItemContext';
import Navbar from '../components/Nav';
import Footer from '../components/Footer.jsx';
import PropTypes from 'prop-types';
import SingleProduct from '../components/SingleProduct.jsx';


const SpecificItem = ({shopItems, setShopItems}) => {
    // const {shopItems} = useContext(ItemContext)
    const [cartCount, setCartCount] = useState(0);

    //retrieve name data from ShopMenu 
    const location = useLocation();
    const {name} = location.state;

    //this returns a new array
    let selectedItem = shopItems.filter((item) => item.name === name);

    return (
        
        <>
        <Navbar cartCount={cartCount}/>
        <div className="max-w-7xl mx-auto p-8 mt-24 mb-auto h-screen justify-between">
          {/* being an array need to map through to access it */}
          {selectedItem.map((item) => (
            <SingleProduct key={item.id} id={item.id} img={item.image} name={item.name} price={item.price} desc={item.desc} shopItems={shopItems} setShopItems={setShopItems} setCartCounts={setCartCount}/>
          ))}


        </div>
        <Footer/>

      </>
    );
};

SpecificItem.propTypes = {
    shopItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        desc: PropTypes.string.isRequired,
      })),
    
    
  };

export default SpecificItem;