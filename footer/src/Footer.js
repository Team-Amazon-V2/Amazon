import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer_wrap">
          <div className="footer_linkContainer">
            <div className="footer_linksWrapper">
              <div className="footer_linkItems">
                <div className="footer_linkTitle">Get to Know Us</div>
                <div className="footer_link">About Us</div>
                <div className="footer_link">Careers</div>
                <div className="footer_link">Press Releases</div>
                <div className="footer_link">Amazon Cares</div>
                <div className="footer_link">Gift a Smile</div>
              </div>
              <div className="footer_linkItems">
                <div className="footer_linkTitle">Make Money with Us</div>
                <div className="footer_link">Sell on Amazon</div>
                <div className="footer_link">Sell under Amazon Accelerator</div>
                <div className="footer_link">Fulfilment by Amazon</div>
                <div className="footer_link">Advertise Your Products</div>
                <div className="footer_link">Amazon Pay on Merchants</div>
              </div>
            </div>
            <div className="footer_linksWrapper">
              <div className="footer_linkItems">
                <div className="footer_linkTitle">GET HELP</div>
                <div className="footer_link">COVID-19 and Amazon</div>
                <div className="footer_link">Your Account</div>
                <div className="footer_link">100% Purchase Protection</div>
                <div className="footer_link">Amazon App Download</div>

                <div className="footer_link">Amazon Assistant Download</div>
              </div>
              <div className="footer_linkItems">
                <div className="footer_linkTitle">RESOURCES</div>
                <div className="footer_link">Books & collectibles</div>
                <div className="footer_link">Designer Fashion Brands</div>
                <div className="footer_link">Digital Photography</div>
                <div className="footer_link">Everything For Your Business</div>
                <div className="footer_link">70 million songs, ad-free</div>
              </div>
            </div>
          </div>
          <div className="socialMedia">
            <div className="socialMedia_wrapper">
              <div className="socialLogo">
                <img
                  className="logo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon_logo"
                />
              </div>
              <div className="websiteRights">
                Amazon © {new Date().getFullYear()} | Privacy Policy | Terms of
                Use | Cookies Settings
              </div>
              <div className="socialIcons">
                <div
                  className="socialIconLink"
                  href="https://www.facebook.com/AmazonIN"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </div>

                <div
                  className="socialIconLink"
                  href="https://www.instagram.com/amazondotin/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </div>
                <div
                  className="socialIconLink"
                  href="https://twitter.com/AmazonIN"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
