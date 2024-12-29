import React from 'react';

const MenuList = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex gap-2 justify-between items-center'>
            <div>
                <img className='w-28 rounded-b-full rounded-tr-full' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-lg font-semibold'>{name} ----------</h2>
                <p className='text-sm text-gray-600 w-[350px]'>{recipe}</p>
            </div>
            <div>
                <h3 className='text-[#BB8506] text-xl'>{price}</h3>
            </div>
        </div>
    );
};

export default MenuList;