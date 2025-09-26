import NavInfo from '../nav-info/nav-info';

import './header.css';

function Header({data}) {
    return (
        <header className='header'>
            <NavInfo data={data}>
            </NavInfo>
        </header>
    )
}

export default Header 