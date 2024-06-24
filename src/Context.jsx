import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const BookmarkProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState(() => {
        const storedBookmarks = localStorage.getItem('bookmarks');
        return storedBookmarks ? JSON.parse(storedBookmarks) : [];
    });

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const addToBookmark = (post) => {
        if (!bookmarks.find((bookmark) => bookmark.id === post.id)) {
            setBookmarks([...bookmarks, post]);
        }
    };

    return (
        <Context.Provider value={{ bookmarks, addToBookmark }}>
            {children}
        </Context.Provider>
    );
};
