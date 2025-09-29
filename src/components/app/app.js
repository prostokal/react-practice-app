import { Component } from 'react';

import Promo from '../../sections/promo/promo';
import About from '../../sections/about/about';
import OurBest from '../../sections/our/our';

import './app.css';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 'house'
      }
    }
  

  changeState = (newState) => {
      this.setState(() => {
          return {
              active: newState
          }
      })
  }

  render() {
      const headerItems = ['Coffee house', 'Our coffee', 'For your pleasure'];
      
      const {active} = this.state

          return (
            <>
              <Promo data={headerItems} status={active} changeStatus={this.changeState}></Promo>
              <About status={active}></About>
              {/* <OurBest></OurBest> */}
            </>
          )
    }
}

export default App;
