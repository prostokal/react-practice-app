import NavInfo from '../nav-info/nav-info';

import './header.css';

function Header({data, changeStatus}) {
    return (
        <header className='header'>
            <NavInfo data={data} changeStatus={changeStatus}>
            </NavInfo>
        </header>
    )
}

export default Header 