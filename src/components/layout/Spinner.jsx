import loader from './assets/loader.gif';

function Spinner() {
     return (
          <div className='w-100 mt-20'>
               <img
                    width={180}
                    className='mx-auto'
                    src={loader}
                    alt='loading...'
               />
          </div>
     );
}

export default Spinner;
