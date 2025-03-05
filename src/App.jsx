import Homepage from './Pages/HomePage'
import Navbar from './components/NavBar'
import AboutUs from './Pages/About_Us'
import Services from './Pages/Services'
import ContactUs from './Pages/Contact_Us'
import Footer from './Pages/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
