import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Style/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='contact'>
            <span>Contact us:</span> <br />
            Phone :2423155436 <br /> Email:Zomato13243@gmail.com
        </div>
        <div className='connect'>
            <FacebookIcon/> <YouTubeIcon /> <XIcon /> <InstagramIcon />
        </div>
    </div>
  )
}

export default Footer