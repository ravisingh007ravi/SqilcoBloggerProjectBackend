import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Blogs, About, Contact, LogIn, Sign, TestPage } from './components/Allcomponents';


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/TestPage' element={<TestPage />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/Sign' element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
