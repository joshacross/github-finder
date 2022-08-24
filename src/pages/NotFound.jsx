import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function NotFound() {
     return (
          <div className='flex-col text-center hero-content mx-auto'>
               <h1 className='text-8xl mb-4'>Oops</h1>
               <p className='text-5xl mb-4'>404 - Page Not Found!</p>
               <Link to='/' className='text-3xl flex btn btn-primary btn-lg'>
                    <FaHome className='mr-4' />
                    <p>Back to Home</p>
               </Link>
          </div>
     );
}

export default NotFound;
