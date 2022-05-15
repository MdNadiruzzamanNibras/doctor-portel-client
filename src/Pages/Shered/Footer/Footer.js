import React from 'react';
import FooterBG from '../../../assets/images/footer.png'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer style={{
            backgroundImage :`url(${FooterBG})`,
            backgroundSize: 'cover',
  
        }} >
  <div className='footer p-14'>
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  </div>
  <div  >
    <p className='py-9 text-center'>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
    );
};

export default Footer;