import './footer.css'; 

import NavInfo from '../nav-info/nav-info';
import Divider from '../ui/divider/divider';


function Footer({data, changeStatus}) {
    return (
        <footer className='footer'>
            <NavInfo data={data} changeStatus={changeStatus}></NavInfo>
            <Divider color='black'></Divider>
        </footer>   
    )
}

export default Footer