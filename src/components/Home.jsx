import { Navbar } from './Navbar'
import { Contact } from './Pages/Contact/Contact'
// import { Blog } from './Pages/Blog/Blog'
// import { Project } from './Pages/Project/Project'
// import {About} from './Pages/About/About'
// import { Resume } from './Pages/Resume/Resume'


export const Home = () => {
  return (
    <div className='main-content'>
      <Navbar/>
      {/* <About/> */}
      {/* <Resume/> */}
      {/* <Project/> */}
      {/* <Blog/> */}
      <Contact/>
    </div>
  )
}
