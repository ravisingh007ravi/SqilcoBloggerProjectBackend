import imgBG from '../images/SignUp.jpg';
import Sign from '../Videos/30fd1f7b63806eff4db0d4276eb1ac45.mp4';
import googleIcon from '../Icons/google.png';
import { Link } from 'react-router-dom';


function LogIn() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 py-[110px]"
      style={{ backgroundImage: `url(${imgBG})` }}>

      {/* SignUp page Design */}
      <div className="bg-gray-100 fixed flex rounded-2xl shadow-2xl p-5">

        {/* SignUp right Side Design For */}
        <div className='md:w-1/2 px-8'>
          <h1 className='font-bold text-2xl'>LogIn</h1>
          <p className='mt-4'>
            If you already are a member, please
            <Link className='text-blue-500' to="/Sign"> SignUp</Link>
          </p>

            <form className='flex flex-col gap-4 my-[30px]'>
              
              <input className='p-2 rounded-xl border' type="email" name="email" placeholder='Email' />
              <input className='p-2 rounded-xl border' type="password" name="password" placeholder='Password' />
              <button className='bg-[#1e376e] my-5 rounded-xl text-white py-2 hover:bg-[#16305a] hover:scale-110 transform duration-300'>
                LogIn
              </button>
            </form>

          <div className='mt-2 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-500' />
            <p className='text-center'>OR</p>
            <hr className='border-gray-500' />
          </div>

          <button className='flex items-center bg-white border py-2 w-full rounded-xl hover:bg-gray-200 font-bold hover:scale-110 transform duration-300'>
            <img className='h-[30px]  mx-[35px]' src={googleIcon} alt="SignGoogleLogo" />
            Sign Up with Google
          </button>
        </div>

        {/* Left side Design */}
        <div className="w-[400px] md:block hidden">
        <video className="object-cover h-full w-full rounded-2xl" autoPlay loop muted>
          <source src={Sign} type="video/mp4" />
          
        </video>
          </div>

      </div>
    </div>
  )
}

export default LogIn


