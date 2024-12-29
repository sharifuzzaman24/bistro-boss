import React from 'react';
import Banner from '../banner/Banner';
import TopCategorys from '../top-categorys/TopCategorys';
import BistroBoss from '../bistro-boss/BistroBoss';



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
            </main>
        </>
    );
};

export default Home;