import "./footer.css";
import FooterCategCard from "./FooterCategCard";
const Footer = () =>{
    return (
        <div className="footer">
            <div className="footer-top-sec">
                <div className="footerleftCont">
                    <div className="footer-logo">
                        <img src="https://www.aha.video/assets/icons/svg/aha-footer-logo.svg" alt="aha" />
                    </div>
                    <div className="connect-with-text">Connect with us</div>
                    <div className="connectIconSec">
                        <a href=""><img src="https://www.aha.video/assets/icons/svg/instagram-icon.svg" alt="Instagram" /></a>
                        <a href=""><img src="https://www.aha.video/assets/icons/svg/facebook-footer.svg" alt="facebook" /></a>
                        <a href=""><img src="https://www.aha.video/assets/icons/svg/twitter-icon.svg" alt="twitter" /></a>
                    </div>
                    <div className="downloadAppCont">
                       <div className="download-text">Download aha mobile app</div>
                       <div className="appBtns">
                         <a href=""><img src="https://www.aha.video/assets/images/googlePlay.png" alt="Google Play" /></a>
                         <a href=""><img src="https://www.aha.video/assets/images/ios.png" alt="App Store" /></a>
                        </div>
                    <div className="connect-with-text">Contact us: <a className="supportMailText" href="mailto:support@aha.video">support@aha.video</a></div>
                    </div>
                </div>
                <FooterCategCard title={"Must Watch Movies"} arr={["Krack", "Naandhi","Chaavu Kaburu Challaga", "Kanulu Kanulanu Dochayante"]}/>
                <FooterCategCard title={"Popular Telugu Movies"} arr={["Sulthan", "Gaali Sampath", "Thellavarithe Guruvaram", "Super Over", "Mail", "Anaganaga O Athidhi"]}/>
                <FooterCategCard title={"Aha Originals"} arr={["Sin", "Masti's", "11th Hour", "Geetha Subramanyam 2020"]}/>
                <FooterCategCard title={"Genres"} arr={["Drama", "Comedy", "Action", "Romance"]}/>
                <FooterCategCard title={"Learn More"} arr={["View Plans", "About Us", "FAQs / Help", "Privacy Policy", "Terms of Service"]}/>          
            </div> 
            <hr className="footer-hr"/>
            <div className="footer-last-sec">
             <div className="footer-copyright">
             © Copyright 2022 Arha Media and Broadcasting Pvt Ltd. All rights reserved. 
             </div>
             <div className="footer-poweredby">
                 <a href="" className="footer-poweredby">
                     <h5 className="poweredbyh5">Powered by</h5>
                     <div className="firstlight">
                         <img src="https://www.aha.video/assets/images/fl_logo.png" alt="firstlight" />
                     </div>
                 </a>
             </div>
            </div>        
        </div>
    )

}

export default Footer