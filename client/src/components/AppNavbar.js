import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const AppNavbar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color='dark' dark expand='sm' className='mb-5'>
        <Container>
          <NavbarBrand href='/' className='mr-auto'>
            AutoPilot
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className='mr-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='https://github.com/roznikm/Leasing_Tool'>
                  Github Repo
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
