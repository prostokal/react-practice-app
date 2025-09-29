import './nav-info.css';

function NavInfo({data, changeStatus}) {
    const NavElements = data.map((elem, i) => {
        return <li key={i + 1} className='header-nav__item'><a onClick={() => changeStatus(elem.split(' ').findLast((element) => element))} href="#">{elem}</a></li> 
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