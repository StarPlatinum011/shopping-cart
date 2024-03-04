import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ShopMenu = ({shopItems}) => {

    // let name = shopItems[name];
    // console.log(shopItems, 'new name');
    // let noSpaceName = name.replaceAll(" ", '-');
    // console.log(shopItems, 'this is where it goes');
    return(
        <div className='flex flex-row mt-40 justify-items-center pl-8 ml-24'>
            {shopItems.map((data) => {
                //erase the blank space on the name
                let nameWithoutSpace = data.name.replaceAll(' ', '-');
                let name = data.name
                return(
                    <div key={data.id}>
                        <div className='flex flex-col items-center gap-3'>
                        <Link state={{name}} to={`/items/${nameWithoutSpace}`}>
                            <img className='object-contain h-48 w-96' src={data.image}/>
                        </Link>
                        <div className='font-semibold text-xl'> ${data.price}<span className='text-base'> {data.name}</span></div> 
                         </div>
                    </div>
                )
                
            })}
        </div>
    )        
};

ShopMenu.propTypes = {
    shopItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })),
    
    
  };
export default ShopMenu;

