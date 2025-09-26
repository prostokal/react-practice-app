import HeroBlock from "../../components/hero-block/hero-block";
import Header from "../../components/header/header";
import './promo.css';

function Promo({data}) {
    return (
        <section className="promo">
            
            <div className="container">
                <Header data={data}></Header>
                <HeroBlock></HeroBlock>
            </div>
            
        </section>
    )
}

export default Promo