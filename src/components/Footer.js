import btm_rec from './bottom_rectangles.svg';
import nwhlogo from './nwhlogo.svg';
import './Footer.css'
import { HashLink as Link } from 'react-router-hash-link';


import fb from './images/Facebook.svg'
import twitter from './images/Twitter.svg'
import linkedin from './images/LinkedIn.svg'
import email from './images/email.png'



function Footer(){
    return(
        <div id="footer">
            <div id="logo">
                <img src={nwhlogo} />
            </div>
            <div id="menu">
                <div>ABOUT US</div>
                <div>CONTACT</div>
                <div>PRODUCTS</div>
                <div>GALLERY</div>
                <div>
                    <img src={fb} />
                    <img src={linkedin} />
                    <img src={twitter} />
                    <a href="mailto:nwarehouse2020@gmail.com"><img src={email} /></a><br/>
                </div>               
            </div>
            <div id="menu">
                <h4>MAILING ADDRESS</h4>
                NWarehouse Private Limited<br/>
                Thirumalaisamudram<br/>
                Thanjavur - 613401<br/>
                Tamilnadu, India 
            </div>
            
            <img src={btm_rec} id="btm_rec" />
        </div>
    );
}
export default Footer;