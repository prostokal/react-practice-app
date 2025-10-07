import { Component } from 'react';

import Promo from '../../sections/promo/promo';
import About from '../../sections/about/about';
import OurBest from '../../sections/our/our';

import './app.css';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sectionActive: 'coffee',
        
        catalog: [
            {url: './icons/our/card-arosmitico-beans.jpg', title: 'Solimo Coffee Beans 2 kg', country: 'Brazil' , price: '10.75$', clickCount: 1},
            {url: './icons/our/card-arosmitico-beans.jpg', title: 'Solimo Coffee Beans 2 kg',country: 'Kenya' , price: '10.75$', clickCount: 0},
            {url: './icons/our/card-arosmitico-beans.jpg', title: 'Solimo Coffee Beans 2 kg', country: 'Columbia' , price: '10.75$', clickCount: 1},
            {url: './icons/our/card-presto-beans.jpg', title: 'Presto Coffee Beans 1 kg', country: 'Brazil' , price: '15.99$', clickCount: 2},
            {url: './icons/our/card-presto-beans.jpg', title: 'Presto Coffee Beans 1 kg', country: 'Kenya' , price: '15.99$', clickCount: 0},
            {url: './icons/our/card-solimo-beans.jpg', title: 'AROMISTICO Coffee 1 kg' ,country: 'Brazil' , price: '6.99$' , clickCount: 1}
        ],
        
        buyingId: -1,


      }
    }
  
  
  changeSectionState = (newState) => {
      this.setState(() => {
          return {
              sectionActive: newState
          }
      })
  }


  render() {
      const headerItems = ['Coffee house', 'Our coffee', 'For your pleasure'];
      
      const {sectionActive, catalog, buyingId} = this.state

          return (
            <>
              <Promo data={headerItems} status={sectionActive} changeStatus={this.changeSectionState}></Promo>
              <About status={sectionActive} buyingCard={catalog[buyingId]}></About>
              <OurBest status={[buyingId, sectionActive]} catalog={catalog}></OurBest>
            </>
          )
    }
}

export default App;
