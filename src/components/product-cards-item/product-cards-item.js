import './product-cards-item.css';

function ProductCardsItem({changeBuyingId, status, config}) {
    const {url,country,key, title, price} = config;
    
    return (
        <div onClick={() => changeBuyingId(key)}  className="product-cards-item" data-status={status}>
            <div className="product-cards-item__img">
                <img src={url} alt="" />
            </div>
            <h3 className="product-cards-item__title">{title}</h3>
            { status == 'house' ? null : <h3 className="product-cards-item__title">{country}</h3>}
            <h4 className="product-cards-item__price">{price}</h4>
        </div>
    )
}
export default ProductCardsItem