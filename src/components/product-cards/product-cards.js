import './product-cards.css';

import ProductCardsItem from '../product-cards-item/product-cards-item';

function ProductCards({status, catalog, changeBuyingId}) {
    let items = [...catalog]
    if (status == 'house') {
        items.sort((a, b) => b.clickCount - a.clickCount);
        items = items.slice(0, 3)
    }

    return (
        <div className="product-cards">
            {items.map((item) => <ProductCardsItem  changeBuyingId={changeBuyingId} status={status} key={item.key} config={item}></ProductCardsItem>)}
        </div>
    )
}
export default ProductCards