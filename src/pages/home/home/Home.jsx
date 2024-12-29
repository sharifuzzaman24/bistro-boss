import React from 'react';
import Banner from '../banner/Banner';
import TopCategorys from '../top-categorys/TopCategorys';
import BistroBoss from '../bistro-boss/BistroBoss';
import TopMenus from '../top-menus/TopMenus';
import CallUs from '../call-us/CallUs';
import ChefRecommends from '../chef-recommends/ChefRecommends';
import Footer from '../../shared/footer/Footer';



const Home = () => {
    return (
        <>
            <header>
                <section>
                    <Banner></Banner>
                </section>
            </header>
            <main className='w-3/4 mx-auto'>
                <section>
                    <TopCategorys></TopCategorys>
                </section>
                <section>
                    <BistroBoss></BistroBoss>
                </section>
                <section>
                    <TopMenus></TopMenus>
                </section>
                <section>
                    <CallUs></CallUs>
                </section>
                <section>
                    <ChefRecommends></ChefRecommends>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Home;