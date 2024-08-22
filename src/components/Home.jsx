import { Navbar } from './Navbar'
// import {About} from './Pages/About/About'
import { Resume } from './Pages/Resume/Resume'


export const Home = () => {
  return (
    <div className='main-content'>
      <Navbar/>
      {/* <About/> */}
      <Resume/>
    </div>
  )
}
