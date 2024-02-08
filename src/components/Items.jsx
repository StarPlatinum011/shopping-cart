import React from 'react';
import Proptypes from 'prop-types';

const Items = ({name, img, price, id}) => {

    let noBlankSpaceName = name.replaceAll(" ", '-')
    return (
        <div>
            
        </div>
    );
};

Items.propTypes = {
    name: Proptypes.string.isRequired,
    img: Proptypes.string.isRequired,
    price : Proptypes.number.isRequired,
    id: Proptypes.number.isRequired
}

export default Items;

