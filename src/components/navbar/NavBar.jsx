import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';

const NavBar = () => {

    const [ currentUser ] = useContext(LoginContext);

    return (
        <div className={style.MyNavbar}>
        <Navbar expand="lg" className="bg-body-secondary">
            <Container className={style.myClass}>
                <div className={style.navbarLeft}>
                    <Navbar.Brand as={Link} to='/'>Fragancias de Nicho</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/products'>Productos</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to='/category/male'>Fragancias masculinas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/category/female'>Fragancias Femeninas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/category/unisex'>Unisex</NavDropdown.Item>
                        </NavDropdown>
                        {currentUser.lvl === 'admin' &&
                        <NavDropdown title='Administrar' id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={'/admin'}>Productos</NavDropdown.Item>
                        </NavDropdown>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    {currentUser.user !== '' ? 
                    <div className='d-flex'>
                        <NavDropdown title={currentUser.user} id="basic-nav-dropdown" className='text-dark text-decoration-none m-3'>
                        <NavDropdown.Item as={Link} to='/logout'>Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                        <CartWidget />
                    </div> : 
                    <Link to='/login' className='text-dark text-decoration-none'>Iniciar Sesión</Link>}
                </div>
            </Container>            
        </Navbar>
        </div>
    );
}

export default NavBar;