import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context';

const Bookmark = () => {
    const bookmark = useContext(Context);
    const [localBookmarks, setLocalBookmarks] = useState([]);

    useEffect(() => {

        const storedBookmarks = localStorage.getItem('bookmarks');
        if (storedBookmarks) {
            setLocalBookmarks(JSON.parse(storedBookmarks));
        }
    }, []);


    return (
        <div className='flex flex-row gap-4'>

            {bookmark.bookmarks.map((post) => (
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
    );
};

export default Bookmark;
