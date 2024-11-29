export const NotFound = () => {
  return (
    <div className='error-body'>
      <div className='noise'></div>
      <div className='overlay-notfound'></div>
      <div className='terminal'>
        <h1 className='err'>
          Error <span className='errorcode'>404</span>
        </h1>
        <p className='output'>
          The page you are looking for cannot be found, has been renamed, or is temporarily unavailable.
        </p>
        <p className='output'>
          Please try to go back or{' '}
          return to the homepage.
        </p>
        <p className='output'>Good luck.</p>
      </div>
    </div>
  );
};
