import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
   <div style={footerOrientation} className='Footer'>
     <footer style={footerStyle}>
      <div style={socialMediaStyle}>
        <a href="https://www.facebook.com"><FaFacebook size={20} /></a>
        <a href="https://www.twitter.com"><FaTwitter size={20} /></a>
        <a href="https://www.instagram.com"><FaInstagram size={20} /></a>
      </div>
      <div style={copyright}>
        © 2023 Tasty Trail. All rights reserved.
      </div>
    </footer>
   </div>
  );
};

const footerOrientation ={
  position: 'bottom',
  width: '100%',
  border: '0.15rem solid',
  bottom: '10rem',
    display: 'flex',
    padding: '10px'



}

const footerStyle = {
  display: 'flex',
  position: 'relative',
  alignSelf: 'bottom',
  alignItems: 'center',
  backgroundColor: 'black',
  color: 'orange',
  padding: '4rem',
  marginTop: '2rem',
  marginBottom: '1rem',
  paddingBottom: '2rem',
  borderRadius: '1rem'
};

const socialMediaStyle = {
  display: 'flex',
  padding: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
};

const copyright = {
  fontSize: '1.2rem',
  padding: '6px'
};

export default Footer;
