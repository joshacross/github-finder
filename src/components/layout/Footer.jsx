import { FaGithub } from 'react-icons/fa';

function Footer() {
     const footerYear = new Date().getFullYear();

     return (
          <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
               <div>
                    <FaGithub className='mb-2 text-3xl' />
                    <p>© {footerYear} CROSS, All Rights Reserved</p>
               </div>
          </footer>
     );
}

export default Footer;
