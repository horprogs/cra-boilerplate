import React from 'react'
import { Navbar, Text } from '@nextui-org/react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar isBordered>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Logo
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <NavLink to="/about">About</NavLink>
      </Navbar.Content>
    </Navbar>
  )
}

export default Header
