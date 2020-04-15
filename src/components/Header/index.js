import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"

const Header = ({ siteTitle, menuLinks }) => (
  // <header className={styles.header}>
  //   <div className={styles[`header__wrap`]}>
  //     <h1 className={styles[`header__heading`]}>
  //       <Link
  //         to="/"
  //         className={`${styles[`header__link`]} ${
  //           styles[`header__link--home`]
  //         }`}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //     <div>
  //         <nav role="main" className={styles[`header__nav`]}>
  //           <ul style={{ display: "flex", flex: 1 }}>
  //             {menuLinks.map(link => (
  //               <li
  //                 key={link.name}
  //                 style={{
  //                   listStyleType: `none`
  //                 }}
  //               >
  //                 <Link to={link.link} className={styles[`header__link`]}>
  //                   {link.name}
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </nav>
  //       </div>
  //   </div>
  // </header>
  <header>
    <Navbar bg="primary" variant="dark" expand="md">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Nav as="ul" className="mr-auto">
        {menuLinks.map(link => (
          <Link as="li" key={link.name} to={link.link} className="nav-link" activeClassName="active">{link.name}</Link>
        ))}
      </Nav>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="/app/login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
