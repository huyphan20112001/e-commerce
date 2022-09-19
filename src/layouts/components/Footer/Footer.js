import "./Footer.scss";
import React from "react";
import Image from "../../../components/Image/Image";
import images from "../../../asssets/image";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="wrapper-footer">
          <div className="footer-logo-social">
            <div className="footer-logo">
              <Image src={images.logo} atl="footer-logo" />
            </div>
            <h4 className="footer-social-title">Social Media</h4>
            <div className="footer-social-icon">
              <Image src={images.fb} alt="fb" />
              <Image src={images.tw} alt="tw" />
              <Image src={images.ig} alt="ig" />
            </div>
          </div>
          <div className="footer-list">
            <div className="footer-products">
              <h4 className="footer-products-title">Products</h4>
              <div className="footer-products-item">Sand Stone</div>
              <div className="footer-products-item">Stone</div>
              <div className="footer-products-item">Cement</div>
              <div className="footer-products-item">Soft Stone</div>
            </div>
            <div className="footer-services">
              <h4 className="footer-services-title">Services</h4>
              <div className="footer-services-item">Measurement Service</div>
              <div className="footer-services-item">Product Advice</div>
              <div className="footer-services-item">Interior Design</div>
            </div>
            <div className="footer-contact">
              <h4 className="footer-contact-title">Contact Information</h4>
              <div className="footer-contact-item">
                3181 AI Imam Saud Ibn Abdul Aziz Branch Rd.
              </div>
              <div className="footer-contact-item">
                An Nuzhah, Riyadh 12474.
              </div>
              <div className="footer-contact-item">Saudi Arabia</div>
            </div>
          </div>
          <div className="footer-img">
            <Image src={images.listSer3} alt="footer-img" />
            <Image src={images.listSer2} alt="footer-img" />
            <Image src={images.listSer1} alt="footer-img" />
            <Image src={images.proj6} alt="footer-img" />
            <Image src={images.proj5} alt="footer-img" />
            <Image src={images.listSer4} alt="footer-img" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
