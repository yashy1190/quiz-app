import { Box } from '@mui/material';
import './Header.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box className='header' x={{ width: 1/4 }} >
      <Link to='/' className='title'>
        <Box textAlign="center">
          <img src='banner1.png' alt='quiz-img' height={250} />
        </Box>
      </Link>
    </Box>
  )
}

export default Header