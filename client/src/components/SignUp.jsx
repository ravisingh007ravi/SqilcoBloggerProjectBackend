// import imgBG from '../images/SignUp.jpg';
import Sign from '../Videos/b8bd4e4273cceae2889d9d259b04f732.mp4';
import googleIcon from '../Icons/google.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function SignUp() {

  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" })

  const ChangeSignUpData = (e) => {
    e.preventDefault()
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
    console.log(signUpData)
  }



  const SignUpDataBase = async (e) => {
    e.preventDefault()
    try {

      const url = 'http://localhost:5000/createUser';

      const user = await axios.post(url, signUpData)
      if (user.status === false) window.alert("invalid data")
      else { navigate('/LogIn') }
    }
    catch (err) { window.alert(err.response.data.msg) }
   
  }

  return (
    <div
      className="SignupImage w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 py-[110px]">

      SignUp page Design
      <div className="bg-gray-100 fixed flex rounded-2xl shadow-2xl p-5">

        {/* SignUp Left Side Design For */}
        <div className='md:w-1/2 px-8'>
          <h1 className='font-bold text-2xl'>SignUp</h1>
          <p className='mt-4'>
            If you already are a member, please
            <Link className='text-blue-500 ' to="/LogIn"> LogIn</Link>
          </p>

          <form className='flex flex-col gap-4'>
            <input className='p-2 mt-8 rounded-xl border' onChange={ChangeSignUpData} type="text" name="name" placeholder='Enter The Name' />
            <input className='p-2 rounded-xl border' onChange={ChangeSignUpData} type="text" name="email" placeholder='Enter The Email' />
            <input className='p-2 rounded-xl border' onChange={ChangeSignUpData} type="password" name="password" placeholder='Enter The Password' />

            <button onClick={SignUpDataBase} className='bg-[#1e376e] rounded-xl text-white py-2 hover:scale-110 transform duration-300'>
              Sign Up
            </button>

          </form>

          <div className='mt-2 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-500' />
            <p className='text-center'>OR</p>
            <hr className='border-gray-500' />
          </div>


          <button className='flex items-center bg-white border py-2 w-full rounded-xl hover:bg-gray-200 hover:scale-110 transform duration-300'>
            <img className='h-[30px]  mx-[35px]' src={googleIcon} alt="SignGoogleLogo" />
            Sign Up with Google
          </button>
        </div>

        {/* Right side Design */}
        <div className="w-[400px] md:block hidden">
          <video className="object-cover h-full w-full rounded-2xl" autoPlay loop muted>
            <source src={Sign} type="video/mp4" />

          </video>
        </div>

      </div>

    </div>
  )
}

export default SignUp;







