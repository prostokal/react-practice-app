
import './hero-block.css';

import Divider from '../ui/divider/divider';

// props - {title, visible}
function HeroBlock({status}) {
    const config = {
        house: {
            title: "Everything You Love About Coffee",
            showDivider: true,
            subTitle:  true,
            showButton: true
        },
        coffee: {
            title: 'Our Coffee',
            showDivider: false,
            subTitle: null,
            showButton: false
        },
        pleasure: {
            title: 'For your pleasure',
            showDivider: false,
            subTitle: null,
            showButton: false
        },
        buying: {
            title: 'Our Coffee',
            showDivider: false,
            subTitle: null,
            showButton: false
        }
        
    }

    const {title, showDivider,subTitle, showButton} = config[status]
        return (
            <main className="hero-block">
                {<h1 className='hero-block-title'>{title}</h1>}
                {showDivider && <Divider color='white'></Divider>}
                {subTitle &&  <h2 className='hero-block-subtitle'>We makes every day full of energy and taste Want to try our beans?</h2>}
                {showButton && <button className="hero-block__button">More</button>}
            </main>
        )
}

export default HeroBlock;