import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import cardImage from '../../../assets/home/slide1.jpg'

const ChefRecommends = () => {
    return (
        <>
            <SectionTitle heading={'chef recommends'} subHeading={'should try'}></SectionTitle>
            <div className='grid grid-cols-3 gap-6 justify-items-center'>
                <div className="card bg-base-300 rounded-none w-80 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-52'
                            src={cardImage} />
                    </figure>
                    <div className="card-body flex flex-col items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-[#BB8506] border-b-4 uppercase text-[#BB8506]">
                                Add to Card
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-300 rounded-none w-80 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-52'
                            src={cardImage} />
                    </figure>
                    <div className="card-body flex flex-col items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn btn-neutral uppercase text-[#BB8506]">
                                Add to Card
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-300 rounded-none w-80 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-52'
                            src={cardImage} />
                    </figure>
                    <div className="card-body flex flex-col items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-[#BB8506] border-b-4 uppercase text-[#BB8506]">
                                Add to Card
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefRecommends;