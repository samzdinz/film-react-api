import './App.css';
import './style/landingPage.css';
import NavigationBar from './components/Navbar';
import Trending from './components/Trending';
import Intro from './components/Intro';
import SuperHero from './components/Superhero';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Intro start */}
      <div className='myBG' id='home'>
        <NavigationBar />
        <Intro />
      </div>
      {/* Intro End */}

      {/* Trending start */}
      <div className='trending' id='trending'>
      <Trending />
      </div>
      {/* Trending End */}

      {/* Superhero Start */}
      <div className='superhero' id='superhero'>
      <SuperHero />
      </div>
      {/* SuperHero End */}

      {/* Footer Start */}
      <div className='text-center text-dark m-3'>
        <Footer />
      </div>
      {/* Footer End */}
    </div>
  );
}

export default App;
