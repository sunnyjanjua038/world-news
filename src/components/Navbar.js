import React, { useState } from 'react';
import { Collapse,Dropdown, Navbar,Input,Button, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText,} from 'reactstrap';
import './Navbar.css'
import {InputGroupAddon} from 'reactstrap'
import image from '../Images/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="position-fixed  bound">
      <NavbarBrand href="/">
        <h5 className="firstlogo" > <span className='logospanfirst'> Yahoo! </span><span className='logospantwo'>news</span></h5> 
      </NavbarBrand>
    
        <NavbarBrand className="brand">
        <div className="d-flex align-items-center "> 
        <div className="position-relative"> 
        <FontAwesomeIcon icon={faMicrophone} className="position-absolute micro" />
        </div>
        <Input placeholder="Search..." className='inputfield' />
        <div className="position-relative">
          <div className="search-icon">
          <span className="search-icon-inner">
        <FontAwesomeIcon icon={faSearch} className="position-absolute searchbox " />
        </span>
        </div>
        </div>
        </div>
        </NavbarBrand>
        <Link to="/news"className="band">News</Link>
        <NavbarBrand className="bandss">Fainance</NavbarBrand>
        <NavbarBrand className="banddd">Sports</NavbarBrand>
        <Dropdown
      isOpen={isOpen}
      toggle={toggle}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="bandds" >
      <NavbarBrand className='dropdown'>
        Options <FontAwesomeIcon icon={faCaretDown} />
      </NavbarBrand>
      <DropdownMenu>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        <NavbarBrand className="email">   
        <FontAwesomeIcon icon={faEnvelope} /> 
        Email
        </NavbarBrand>
        <NavbarBrand className="bands"> 
          <Button className='btn-first'>sign in</Button>
        </NavbarBrand>
      </Navbar>
      
    </div>
  );
}

export default MainNavbar;