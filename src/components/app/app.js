import { Component } from 'react';

import Promo from '../../sections/promo/promo';
import About from '../../sections/about/about';
import OurBest from '../../sections/our/our';
import Footer from '../footer/footer';


import './app.css';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sectionActive: 'house',
        
        catalog: [
            {url: './icons/our/card-arosmitico-beans.jpg', title: 'Solimo Coffee Beans 2 kg', country: 'Brazil' , price: '10.75$', clickCount: 1, key: 1},
            {url: './icons/our/card-arosmitico-beans.jpg', title: 'Solimo Coffee Beans 2 kg',country: 'Kenya' , price: '10.75$', clickCount: 0, key: 2},
            {url: './icons/our/card-arosmitico-beans.jpg', title: 'Solimo Coffee Beans 2 kg', country: 'Columbia' , price: '10.75$', clickCount: 1, key: 3},
            {url: './icons/our/card-presto-beans.jpg', title: 'Presto Coffee Beans 1 kg', country: 'Brazil' , price: '15.99$', clickCount: 2, key: 4},
            {url: './icons/our/card-presto-beans.jpg', title: 'Presto Coffee Beans 1 kg', country: 'Kenya' , price: '15.99$', clickCount: 0, key: 5},
            {url: './icons/our/card-solimo-beans.jpg', title: 'AROMISTICO Coffee 1 kg' ,country: 'Brazil' , price: '6.99$' , clickCount: 1, key: 6}
        ],
         
        buyingId: -1,


      }
    }
  

  changeSectionState = (newState) => {
      this.setState(() => {
          return {
              sectionActive: newState,
              buyingId: -1
          }
      })
  }

  changeBuyingId = (id) => {
      this.setState(() => {
        return {
          sectionActive: 'buying',
          buyingId: id,
        }
      })  
  }

  render() {

      const headerItems = ['Coffee house', 'Our coffee', 'For your pleasure'];
      
      const {sectionActive, catalog, buyingId} = this.state

          return (
            <>

              <Promo data={headerItems} status={sectionActive} changeStatus={this.changeSectionState}></Promo>
              <About status={sectionActive} buyingCard={catalog.find(card => card.key == buyingId)}></About>              
              {buyingId == -1 ? <OurBest status={sectionActive} changeBuyingId={this.changeBuyingId} catalog={catalog}></OurBest> : null}
              <Footer data={headerItems} changeStatus={this.changeSectionState}></Footer>
            </>
          )
    }
}

export default App;
