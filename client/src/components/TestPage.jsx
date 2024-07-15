import { useAuth0 } from "@auth0/auth0-react";
import imgBG from '../images/6.jpg'

function TestPage() {
  const { user, loginWithRedirect } = useAuth0();
  console.log("Current User", user);

  return (

    <div>
    {/* <div className='h-screen w-full'>
      <img className='h-full w-full object-cover' src={imgBG} alt="bodyImg" />
  </div> */}
  <div className="fixed">
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()} className="mx-5 my-[500px] text-yellow-400 font-bold">
          Click
        </button>
      )}
    </div>
  </div>
    
  );
}

export default TestPage;
