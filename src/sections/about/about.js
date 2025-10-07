import './about.css';

import Divider from '../../components/ui/divider/divider';

function About({status, buyingCard}) {
    const config = {
        house: {img: null, title: 'About Us', descr: (
      <>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                As greatly removed calling pleased improve an.
                Last ask him cold feel met spot shy want.
                Children me laughing we prospect answered followed. At it went is song that held help face.
                <br /> <br />
                Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw.
                Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage.
                Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. 
                Secure active living depend son repair day ladies now.
      </>
      )},

        coffee: {img: './icons/about/about-coffee.jpg', title: 'About our beans', descr: (
            <>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br /><br />
                Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                As greatly removed calling pleased improve an.
                Last ask him cold feel met spot shy want.
                Children me laughing we prospect answered followed. At it went is song that held help face.
            </>
        )},
        pleasure: {img: './icons/about/about-pleasure.jpg', title: 'About our good', descr: (<>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br /><br />
                Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                As greatly removed calling pleased improve an.
                Last ask him cold feel met spot shy want.
                Children me laughing we prospect answered followed. At it went is song that held help face.
            </>)},        
    }

    const {img, title, descr} = config[status];

    if (!buyingCard) {
        return (
            <section className="about">
            <div className="container">

                <div data-status={status} className="about__wrapper">
                
                {img && <div data-status={status} className="about__img"><img src={img} alt={img.slice(0, -4)} /></div>}

                <main className="about__info">
                    <h2 className="about-title title">{title}</h2>
                    <Divider color='black'></Divider>
                    <p className="about-descr">
                        {descr}
                    </p>
                </main>
                </div>

            </div>
        </section>
        )
    }

}

export default About;