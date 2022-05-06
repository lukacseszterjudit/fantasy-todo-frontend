import { Link } from 'react-router-dom';

function HeaderComponent(props){
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <Link className="navbar-brand" to="/tasks">Tasks</Link>
                    <Link className="navbar-brand" to="/rewards">Shop</Link>
                </nav>
            </header>
        </div>
    ); 
}

export default HeaderComponent;