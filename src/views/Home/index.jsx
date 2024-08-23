import About from '../../component/About'
import CallToAction from '../../component/CTA'
import Client from '../../component/Client'
import Companies from '../../component/Companies'
import Contact from '../../component/Contact'
import Features from '../../component/Features'
import Footer from '../../component/Footer'
import Hero from '../../component/Hero'
import Navbar from '../../component/Navbar'
import Pricing from '../../component/Pricing'

const Home = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <main>
                <Navbar />
                <Hero />
                <Companies />
                <About />
                <Client />
                <Features />
                <Pricing />
                <CallToAction />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}

export default Home