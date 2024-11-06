import Header from "./components/header/Header"
import '../src/index.css'
import Hero from "./components/hero/Hero"
import Features from "./components/features/Features"
import Pricing from "./components/pricing/Pricing"
import Faq from "./components/faq/Faq"
import Testimonials from "./components/testmonial/Testimonials"
import Footer from "./components/footer/Footer"
const App = () => {
  return (
    <main className=" overflow-hidden min-h-screen">
      
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      {/* <Download/> */}
      <Footer/>

    </main>
  )
}

export default App
