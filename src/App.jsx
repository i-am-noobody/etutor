import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Bookmark from './pages/Bookmark';
import { BookmarkProvider } from './Context';

const App = () => {
  return (
    <BookmarkProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/bookmark' element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </BookmarkProvider>
  )
}

export default App