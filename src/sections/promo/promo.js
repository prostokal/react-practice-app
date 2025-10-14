import HeroBlock from "../../components/hero-block/hero-block";
import Header from "../../components/header/header";
import './promo.css';

function Promo({data, status, changeStatus}) {
    return (
        <section data-status={status} className="promo">

            <div className="container">
                <Header changeStatus={changeStatus} data={data}></Header>
            
                <HeroBlock changeStatus={changeStatus} status={status}>
                </HeroBlock>
            </div>
            
        </section>
    )
}

export default Promo