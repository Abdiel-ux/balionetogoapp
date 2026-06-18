import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Drivers from './components/Drivers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-md mx-auto relative">
        <main>
          <Hero />
          <Destinations />
          <Drivers />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
