export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <button className='navbar-link active'>
            About
          </button>
        </li>

        <li className='navbar-item'>
          <button className='navbar-link'>
            Resume
          </button>
        </li>

        <li className='navbar-item'>
          <button className='navbar-link'>
            Project
          </button>
        </li>

        <li className='navbar-item'>
          <button className='navbar-link'>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};
