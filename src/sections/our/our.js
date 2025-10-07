import './our.scss';

import ProductCards from '../../components/product-cards/product-cards';
import AppFilter from '../../components/app-filter/app-filter';
import Divider from '../../components/ui/divider/divider';

function OurBest({status, catalog}) {
    let visibleCards = []
    const countrys = Array.from(new Set(catalog.map(item => item.country)))
    return (
        <section className='our' data-status={status[1]}>
            <div className="container">

                {status[1] == 'house' ? <h2 className="our-title title">Our best</h2> : null}
                {status[1] == 'house' ? null : <Divider/>}
                {status[1] == 'coffee' ? <AppFilter countrys={countrys}></AppFilter> : null}
                
                <ProductCards catalog={catalog} status={status[1]}></ProductCards>
            </div>
        </section>
    )
}
export default OurBest; 