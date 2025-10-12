import './about.css';

import Divider from '../../components/ui/divider/divider';

function About({status, buyingCard}) {
    const config = {
        house: {url: null, title: 'About Us', descr: (
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

        coffee: {url: './icons/about/about-coffee.jpg', title: 'About our beans', descr: (
            <>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br /><br />
                Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                As greatly removed calling pleased improve an.
                Last ask him cold feel met spot shy want.
                Children me laughing we prospect answered followed. At it went is song that held help face.
            </>
        )},
        pleasure: {url: './icons/about/about-pleasure.jpg', title: 'About our good', descr: (<>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br /><br />
                Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                As greatly removed calling pleased improve an.
                Last ask him cold feel met spot shy want.
                Children me laughing we prospect answered followed. At it went is song that held help face.
            </>)},        
        

    }
    if (buyingCard) {
        config.buying = {
            url: buyingCard.url, title: 'About it', descr: (
            <>
            <b>Country:</b> {buyingCard.country} <br /><br />

            <b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem inventore, cupiditate nulla, voluptatum nostrum dolores eveniet enim quaerat repellat animi numquam vitae odio in culpa deleniti molestiae non explicabo!
            <br /><br />
            <b>Price:</b> <strong>{buyingCard.price}</strong>
            </>
        )}
    }
    const {url, title, descr} = config[status];
        return (
            <section className="about">
                <div className="container">

                    <div data-status={status} className="about__wrapper">
                    
                    {url && <div data-status={status} className="about__img"><img src={url} alt={url.slice(0, -4)} /></div>}

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

export default About;