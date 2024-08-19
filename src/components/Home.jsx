import { Navbar } from './Navbar'
import {About} from './Pages/About'
// import {Resume} from './Pages/Resume'
// import {Project} from './Pages/Project'
// import {Contact} from './Pages/Contact'

export const Home = () => {
  return (
    <div className='main-content'>
      <Navbar/>
      <About/>
      {/* <Resume/>
      <Project/>
      <Contact/> */}
    </div>
  )
}
