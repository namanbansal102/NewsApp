import React, { useState } from 'react';
import Navbar from './components/Navbar';
import  NoteState  from './notes/NoteState';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  const [myChoice, setMyChoice] = useState('general');

  return (

    <BrowserRouter>
    <NoteState>

      <Navbar />
      <Routes>
        <Route path="/" element={<News myChoice={myChoice} />} />
        <Route path="/science" element={<News myChoice="science" />} />
        <Route path="/technology" element={<News myChoice="technology" />} />
        <Route path="/entertainment" element={<News myChoice="entertainment" />} />
        <Route path="/business" element={<News myChoice="business" />} />
        <Route path="/health" element={<News myChoice="health" />} />
      </Routes>
    </NoteState>
    </BrowserRouter>
  );
}
