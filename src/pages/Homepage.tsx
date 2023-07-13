import Social from '../components/Socialbar';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import { Footer } from '../components/Footer';

function Homepage() {
  return (
    <div className="homepage flex flex-col gap-5  max-w-full">
      <Social />
      <Navbar />
      {/* <Body />*/}
      <Footer />
    </div>
  );
}

export default Homepage;
