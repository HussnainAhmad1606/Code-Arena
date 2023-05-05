'use client'
import {React, useState} from 'react'
import "flowbite";
import { Navbar, Button } from "flowbite-react";
import LoginModale from './LoginModale';
import SignUpModale from './SignUpModale';

function NavBar() {

  const [showModel, setShowModel] = useState(false);
  return (
    <>
    <Navbar
    fluid={true}
    rounded={true}
  >
    <Navbar.Brand href="https://flowbite.com/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">



    <LoginModale/>
    <SignUpModale/>


      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        About
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Services
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Pricing
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>



  </>
  )
}

export default NavBar;