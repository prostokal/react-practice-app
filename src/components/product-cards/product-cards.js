import './product-cards.css';

import ProductCardsItem from '../product-cards-item/product-cards-item';

function ProductCards({status, catalog}) {
    let items = [...catalog]
    if (status == 'house') {
        items.sort((a, b) => b.clickCount - a.clickCount);
        items = items.slice(0, 3)
    }
    
    return (
        <div className="product-cards">
            {items.map((item, id) => <ProductCardsItem status={status} key={id +1} config={item}></ProductCardsItem>)}
        </div>
    )
}
export default ProductCards