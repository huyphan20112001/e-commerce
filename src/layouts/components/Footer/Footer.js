import "./Footer.scss";
import React from "react";
import Image from "../../../components/Image/Image";
import images from "../../../asssets/image";

function Footer({ mode }) {
  return (
    <footer id="footer" className={`footer ${mode}`}>
      <div className="container">
        <div className="wrapper-footer">
          <div className="footer-logo-social">
            <div className="footer-logo">
              <h2>Logo</h2>
            </div>
            <div className="wrapper-social">
              <h4 className="footer-social-title">Social Media</h4>
              <div className="footer-social-icon">
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.46 16H5.39V8.7H7.84L8.21 5.86H5.39V4.04C5.39 3.22 5.62 2.66 6.8 2.66H8.31V0.11C8.05 0.0799999 7.16 0 6.12 0C3.94 0 2.46 1.33 2.46 3.76V5.86H0V8.7H2.46V16Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1925 1.72C17.7025 2.45 17.0825 3.1 16.3625 3.62C16.3725 3.77 16.3725 3.93 16.3725 4.09C16.3725 8.94 12.6825 14.53 5.9425 14.53C3.8725 14.53 1.9425 13.92 0.3125 12.88C0.6025 12.91 0.8925 12.93 1.1925 12.93C2.9125 12.93 4.4925 12.34 5.7425 11.36C4.97784 11.3442 4.23722 11.0899 3.62408 10.6328C3.01093 10.1756 2.55589 9.53834 2.3225 8.81C2.5425 8.85 2.7725 8.88 3.0125 8.88C3.3425 8.88 3.6725 8.83 3.9725 8.75C3.1431 8.57974 2.39778 8.12869 1.86222 7.4729C1.32666 6.8171 1.03361 5.99669 1.0325 5.15V5.11C1.5325 5.38 2.0925 5.55 2.6925 5.57C2.1903 5.23314 1.77886 4.7777 1.49456 4.24399C1.21026 3.71027 1.06186 3.11471 1.0625 2.51C1.0625 1.84 1.2425 1.21 1.5625 0.67C3.3725 2.89 6.0725 4.35 9.1225 4.5C9.0625 4.23 9.0225 3.95 9.0225 3.66C9.02515 2.68839 9.41297 1.75748 10.1009 1.07138C10.7889 0.385283 11.7209 -3.60686e-06 12.6925 0C13.7525 0 14.7025 0.44 15.3725 1.16C16.2025 0.99 16.9925 0.69 17.7025 0.27C17.4225 1.12 16.8425 1.84 16.0825 2.29C16.8111 2.21036 17.5229 2.01807 18.1925 1.72Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1414 5.324C18.1313 4.56662 17.9895 3.81678 17.7224 3.108C17.4908 2.51015 17.1369 1.9672 16.6836 1.51383C16.2302 1.06046 15.6873 0.706651 15.0894 0.475C14.3897 0.212357 13.6506 0.0703413 12.9034 0.0550001C11.9414 0.0120001 11.6364 0 9.19441 0C6.75241 0 6.43941 6.70552e-08 5.48441 0.0550001C4.73757 0.0704541 3.99875 0.212468 3.29941 0.475C2.70146 0.706489 2.15843 1.06024 1.70504 1.51363C1.25165 1.96702 0.897895 2.51006 0.666406 3.108C0.403237 3.80713 0.261529 4.54611 0.247406 5.293C0.204406 6.256 0.191406 6.561 0.191406 9.003C0.191406 11.445 0.191406 11.757 0.247406 12.713C0.262406 13.461 0.403406 14.199 0.666406 14.9C0.898284 15.4978 1.2523 16.0406 1.70584 16.4938C2.15938 16.947 2.70247 17.3006 3.30041 17.532C3.99784 17.8052 4.73678 17.9574 5.48541 17.982C6.44841 18.025 6.75341 18.038 9.19541 18.038C11.6374 18.038 11.9504 18.038 12.9054 17.982C13.6526 17.9673 14.3918 17.8256 15.0914 17.563C15.6891 17.3311 16.2319 16.9772 16.6852 16.5238C17.1386 16.0705 17.4925 15.5277 17.7244 14.93C17.9874 14.23 18.1284 13.492 18.1434 12.743C18.1864 11.781 18.1994 11.476 18.1994 9.033C18.1974 6.591 18.1974 6.281 18.1414 5.324ZM9.18841 13.621C6.63441 13.621 4.56541 11.552 4.56541 8.998C4.56541 6.444 6.63441 4.375 9.18841 4.375C10.4145 4.375 11.5904 4.86207 12.4574 5.72905C13.3243 6.59603 13.8114 7.7719 13.8114 8.998C13.8114 10.2241 13.3243 11.4 12.4574 12.267C11.5904 13.1339 10.4145 13.621 9.18841 13.621ZM13.9954 5.282C13.8538 5.28213 13.7136 5.25434 13.5827 5.20021C13.4519 5.14608 13.333 5.06668 13.2329 4.96655C13.1327 4.86643 13.0533 4.74754 12.9992 4.61669C12.9451 4.48584 12.9173 4.3456 12.9174 4.204C12.9174 4.0625 12.9453 3.92239 12.9994 3.79166C13.0536 3.66093 13.1329 3.54215 13.233 3.44209C13.3331 3.34204 13.4518 3.26267 13.5826 3.20852C13.7133 3.15437 13.8534 3.1265 13.9949 3.1265C14.1364 3.1265 14.2765 3.15437 14.4072 3.20852C14.538 3.26267 14.6568 3.34204 14.7568 3.44209C14.8569 3.54215 14.9362 3.66093 14.9904 3.79166C15.0445 3.92239 15.0724 4.0625 15.0724 4.204C15.0724 4.8 14.5904 5.282 13.9954 5.282Z"
                    fill="white"
                  />
                  <path
                    d="M9.1905 12.0011C10.849 12.0011 12.1935 10.6566 12.1935 8.99812C12.1935 7.33961 10.849 5.99512 9.1905 5.99512C7.53199 5.99512 6.1875 7.33961 6.1875 8.99812C6.1875 10.6566 7.53199 12.0011 9.1905 12.0011Z"
                    fill="white"
                  />
                </svg>
              </div>
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
