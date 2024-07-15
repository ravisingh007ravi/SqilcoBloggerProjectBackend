import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Blogs, About, Contact, LogIn, Sign, TestPage } from './components/Allcomponents';
import { Auth0Provider } from '@auth0/auth0-react';

// Fetch these from environment variables
const domain = "REACT_APP_AUTH0_DOMAIN=dev-t7rhztzqcl372q7v.us.auth0.com";
const clientId = "REACT_APP_AUTH0_CLIENT_ID=5CJeJ0hVJnDO9nyTjV0W0JIsm63CAtih";

function App() {
  return (
    <>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/testpage' element={<TestPage />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/sign' element={<Sign />} />
            {/* 404 Not Found Route */}
            <Route path='*' element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </>
  );
}

export default App;
