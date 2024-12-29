import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import axios from 'axios';
import MenuList from '../../../components/MenuList';

const TopMenus = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('/menu.json')
            .then(res => {
                const menuData = res.data;
                const popularMenu = menuData.filter(data => data.category === "popular");
                setMenu(popularMenu)
            })
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <SectionTitle heading={'From our menu'} subHeading={'check it out'}></SectionTitle>
            <div className='grid grid-cols-2 gap-8'>
                {
                    menu.map((item) => <MenuList key={item._id} item={item}></MenuList>)
                }
            </div>
            <button className="btn btn-outline border-b-4 mt-10">
                VIEW FULL MENU
            </button>


        </div>
    );
};

export default TopMenus;