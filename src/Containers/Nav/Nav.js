import './nav.css';
import { Link } from 'react-router-dom';


const Nav = () =>{
    return(
        <div className='nav-container'>
            <div className='content-home'>
                <Link to={"/"} alt="" className='link-home'>
                    <h3> Home</h3>
                </Link>
            </div>
           
            <h3>Inscription</h3>
            <h3>Connexion</h3>
           
        </div>
    )
}
export default Nav;