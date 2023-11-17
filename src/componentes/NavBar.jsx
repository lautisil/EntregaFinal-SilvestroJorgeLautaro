import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (

    <Flex>
      <Box p='4' bg='red.400'>
        <Link to={"/"}>
        <h1>NaturAle</h1>  {/* Brand */}
        </Link>
      </Box>

      <Spacer />
      <Box p='4' bg='blue.400'>
        <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to={'/category/cremas'}>Cremas</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/category/perfumes'}>Perfumes</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/category/anti-transpirantes'}>Anti-transpirantes</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      
      <Spacer />
      <Box p='4' bg='green.400'>
        <Link to={"/cart"}>
        <CartWidget /> {/* Carrito */}
        </Link>
      </Box>
    </Flex>
  )
}

export default NavBar