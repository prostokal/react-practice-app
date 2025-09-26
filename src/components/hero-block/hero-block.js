
import './hero-block.css';

import Divider from '../ui/divider/divider';

// props - {title, visible}
function HeroBlock() {
    
    return (
        <main className="hero-block">
            <h1 className='hero-block-title'>Everything You Love About Coffee</h1>
            <Divider color='white'></Divider>
            <h2 className='hero-block-subtitle'>We makes every day full of energy and taste Want to try our beans?</h2>
            <button className="hero-block__button">More</button>
        </main>
    )
}

export default HeroBlock;