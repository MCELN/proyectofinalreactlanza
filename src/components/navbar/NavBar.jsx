import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import { LoginContext } from '../../context/LoginContext';

const NavBar = () => {

    const [users] = useContext(LoginContext);

    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container className={style.myClass}>
                <div className={style.navbarLeft}>
                    <Navbar.Brand><Link to='/' className='text-dark text-decoration-none'>Fragancias de Nicho</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/' className='text-dark text-decoration-none'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/products' className='text-dark text-decoration-none'>Productos</Link></Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to='/category/male' className='text-dark text-decoration-none'>Fragancias masculinas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/category/female' className='text-dark text-decoration-none'>Fragancias Femeninas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/category/unisex' className='text-dark text-decoration-none'>Unisex</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='d-flex'>
                    <Link to={users ? '/products' : '/login'} className='text-dark text-decoration-none mx-3'>{users ? users : "Iniciar Sesión"}</Link>
                    {users && <CartWidget />}
                </div>
            </Container>            
        </Navbar>
    );
}

export default NavBar;