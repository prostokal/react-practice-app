import NavInfo from '../nav-info/nav-info';

import './header.css';

function Header({data, changeStatus}) {
    return (
        <header className='header'>
            <NavInfo changeStatus={changeStatus} data={data}>
            </NavInfo>
        </header>
    )
}

export default Header 