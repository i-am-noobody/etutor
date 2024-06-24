import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [data, setData] = useState([]);
    const { addToBookmark } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleAddToBookmark = (post) => {
        addToBookmark(post);
    };

    return (
        <div className='w-full h-cover bg-slate-300 justify-center items-center px-8 py-6'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-[2rem] font-bold text-center mb-8'>All Posts</h1>
                <Link to="/bookmark"> Bookmark</Link>
            </div>
            <div className='flex flex-row gap-8 flex-wrap'>
                {data.map((post) => (
                    <div className='flex flex-col border-2 border-solid border-black p-2 gap-2 bg-white w-[400px] rounded-lg' key={post.id}>
                        <h2 className='text-[1.4rem] font-bold'>{post.title}</h2>
                        <p className='mt-2'>{post.body}</p>
                        <div className='flex flex-row'>
                            <button className='px-4 py-1 bg-gray-800 text-white rounded-md' onClick={() => handleAddToBookmark(post)}>
                                Add to bookmark
                            </button>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Homepage;
