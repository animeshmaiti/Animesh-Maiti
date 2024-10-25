import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <NavLink className='navbar-link' to='/'>
            About
          </NavLink>
        </li>

        <li className='navbar-item'>
          <NavLink className='navbar-link' to='/resume'>
            Resume
          </NavLink>
        </li>

        <li className='navbar-item'>
          <NavLink className='navbar-link' to='/project'>
            Project
          </NavLink>
        </li>

        <li className='navbar-item'>
          <NavLink className='navbar-link' to='/blog'>
            Blog
          </NavLink>
        </li>

        <li className='navbar-item'>
          <NavLink className='navbar-link' to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
