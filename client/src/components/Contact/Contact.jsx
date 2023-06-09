import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Contact() {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type='text' placeholder='Enter your e-mail...'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <PinterestIcon/>
                <EmailIcon/>
            </div>
        </div>
    </div>
  )
}
