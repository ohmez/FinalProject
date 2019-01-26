import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavBar (props) {
    return (
      <Nav className="navbar navbar-light bg-light justify-content-end">
      <form className="form-inline">
          <button onClick={() => props.hPChange('Search')} className={"btn btn-outline-primary" +(props.cPage === 'Search' ? 'btn-active disabled':'')}type="button">Search</button>
          <button onClick={() => props.hPChange('Save')} className={"btn btn-outline-success" +(props.cPage === 'Save' ? 'btn-active disabled':'')} type="button">Save</button>
      </form>
      </Nav>
    );
}
export default NavBar;