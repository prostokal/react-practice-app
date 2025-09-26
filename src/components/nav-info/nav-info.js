import './nav-info.css';

function NavInfo({data}) {
    const NavElements = data.map(elem => {
                    return <li className='header-nav__item'><a href="#">{elem}</a></li> 
    })
    return (
        <nav className='header-nav'>
            <ul>
                {NavElements}
            </ul>
        </nav>
    )
}

export default NavInfo