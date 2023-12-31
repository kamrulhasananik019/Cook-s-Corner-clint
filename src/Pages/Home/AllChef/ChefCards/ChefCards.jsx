import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/Fc";
import { RxCookie } from "react-icons/Rx";
import { MdDateRange } from "react-icons/Md";
import LazyLoad from 'react-lazy-load';

const ChefCards = ({ cd }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id, chef_picture, bio, num_recipes, likes_num, years_of_experience, chef_name } = cd;

    return (
        <div className='shadow-2xl shadow-lime-300 '>
            <div
                style={{ height: '750px' }}
                className="max-w-2xl border border-lime-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <LazyLoad threshold={0.95} onContentVisible={() => { console.log('loaded!') }} >
                    <img className="rounded-t-lg" src={chef_picture} />
                </LazyLoad>
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <span className='text-orange-400'> {chef_name}</span>
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {bio}     </p>

                    <div className='flex py-3 text-lg'> <FcLike className='font-bold  text-2xl mx-2'></FcLike> <h4 className='font-bold'> Likes : {likes_num}</h4> </div>

                    <div className='flex'>
                        <RxCookie className='font-bold  text-2xl mx-2'></RxCookie>
                        <h4 className='font-bold'> num recipes : {num_recipes}</h4>
                    </div>

                    <div className='flex py-2'>
                        <MdDateRange className='font-bold  text-2xl mx-2'></MdDateRange>
                        <h4 className='font-semibold'> years of experience : {years_of_experience}</h4>
                    </div>


                    <div className='py-1'>
                        <Link

                            to={`/dashes/${id}`}

                            className="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-white py-2 px-2  border border-blue-500 hover:border-transparent rounded" >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCards;
