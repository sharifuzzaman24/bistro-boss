import React from 'react';
import image from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div
            className="hero h-[500px] my-20"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-3/4 h-[276px] flex flex-col justify-center items-center bg-white text-center">
                    <h1 className="mb-5 text-4xl text-black font-bold uppercase">Bistro Boss</h1>
                    <p className="mb-5 text-gray-700 w-3/4">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;