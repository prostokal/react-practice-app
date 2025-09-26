import Promo from '../../sections/promo/promo';
import About from '../../sections/about/about';
import OurBest from '../../sections/our/our';

import './app.css';


function App() {
  const data = ['Coffee house', 'Our coffee', 'For your pleasure'];
  return (
    <>
       <Promo data={data}></Promo>
       <About></About>
       <OurBest></OurBest>
    </>
  );
}

export default App;
