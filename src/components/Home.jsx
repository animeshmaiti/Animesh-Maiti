import { Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar';

import { Contact } from './Pages/Contact/Contact';
import { Blog } from './Pages/Blog/Blog';
import { Project } from './Pages/Project/Project';
import { About } from './Pages/About/About';
import { Resume } from './Pages/Resume/Resume';
import { NotFound } from './NotFound';

export const Home = () => {
  return (
    <div className='main-content'>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/project' element={<Project />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
};
