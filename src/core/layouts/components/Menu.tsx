import { LocalStorageSession } from '@/core/sessions';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

export const Menu = (): JSX.Element => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const isAuth = LocalStorageSession.isValidAuthorization();

    if (isAuth) {
      const user = LocalStorageSession.getAuthorization();

      setUserName(`${user.name} ${user.lastName}`);
    }
  }, []);

  const closeSession = (): void => {
    LocalStorageSession.removeAuthorization();

    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' to="/">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Admins" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="periocities">
                Periocities
              </Link>
            </NavDropdown>
            <NavDropdown title="Mc" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="investments">
                Investments
              </Link>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title={`☻ ${userName}`} id="setting-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Configurar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#"
                onClick={() => {
                  closeSession();
                }}
              >
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}