import React from 'react';
import Banner from '../banner/Banner';
import TopCategorys from '../top-categorys/TopCategorys';



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
            </main>
        </>
    );
};

export default Home;