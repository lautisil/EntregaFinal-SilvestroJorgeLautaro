import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>

          <Flex>
            <Box p='4' bg='red.400'>
              <h1>NaturAle</h1>  {/* Brand */}
            </Box>

            <Spacer />
            <Box p='4' bg='blue.400'>
              <Menu>
                <MenuButton>
                  Menu
                </MenuButton>
                <MenuList>
                  <MenuItem>Ofertas Semanales</MenuItem>
                  <MenuItem>Productos</MenuItem>
                  <MenuItem>Proximos en venta</MenuItem>
                  <MenuItem>Perfil</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            
            <Spacer />
            <Box p='4' bg='green.400'>
              <CartWidget /> {/* Carrito */}
            </Box>
          </Flex>
        
    </div>
    
  )
}

export default NavBar