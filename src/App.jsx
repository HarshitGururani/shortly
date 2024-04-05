/* eslint-disable no-undef */
import BoostLink from './components/BoostLink';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './home/Home';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <BoostLink />
      <Footer />
    </div>
  );
};
export default App;
