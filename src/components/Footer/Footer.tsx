import React from 'react';
import "./Footer.css";
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { footerData } from '../../data/footerData';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <h2>{footerData.Name}</h2>
            <div className="contact-item">
                <EmailIcon style={{marginRight: "16px"}}/>
                {footerData.Email}
            </div>
            <div className="contact-item">
                <ContactPhoneIcon style={{marginRight: "16px"}}/>
                {footerData.Phone}
            </div>
            <div className="contact-item">
                <LinkedInIcon style={{marginRight: "16px"}}/>
                <a href={footerData.LinkedIn} target="_blank" rel="noreferrer" style={{color: "white"}}>Fahim Shahriar</a>
            </div>
            <div className="contact-item">
                <GitHubIcon style={{marginRight: "16px"}}/>
                <a href={footerData.Github} target="_blank" rel="noreferrer" style={{color: "white"}}>abmfahimshahriar</a>
            </div>
        </div>
    )
}

export default Footer;