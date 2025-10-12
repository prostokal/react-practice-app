import './our.scss';

import ProductCards from '../../components/product-cards/product-cards';
import AppFilter from '../../components/app-filter/app-filter';
import Divider from '../../components/ui/divider/divider';

import { Component } from 'react';

class OurBest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            country: 'all'
        }
    }

    changeFilterState = (text) => {
        this.setState(() => {
            return {
                filter: text,
            }
        })
    }
    changeCountryState = (country) => {
        let count = country
        if (this.state.country == country) {
            count = 'all'
        }
        this.setState(() => {
            return {
                country: count
            }
        })
    }
    render() {
        const {status, catalog, changeBuyingId} = this.props;
        const countrys = Array.from(new Set(catalog.map(item => item.country)));
        
        const {filter, country} = this.state 

        
        return (
            <section className='our' data-status={status}>
            <div className="container">
            
                {status == 'house' ? <h2 className="our-title title">Our best</h2> : null}
                {status == 'house' ? null : <Divider/>}
                {status == 'coffee' ? <AppFilter countrys={countrys}
                changeFilterState={this.changeFilterState}
                changeCountryState={this.changeCountryState}
                filter={filter}
                ></AppFilter> : null}
                
                <ProductCards changeBuyingId={changeBuyingId} 
                catalog={catalog.filter(item => filter != '' ? item.title.toLowerCase().includes(filter.toLowerCase()): item).filter(item => country != 'all'? item.country == country : item)}
                status={status}

                ></ProductCards>
            </div>
        </section>
    )
    }
}
export default OurBest; 