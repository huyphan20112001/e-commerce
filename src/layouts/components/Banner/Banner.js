import './Banner.scss';
import React from 'react';
import images from '../../../asssets/image';
import Image from '../../../components/Image/Image';

function Banner() {
  return (
    <div id='banner' className='banner'>
      <div className='banner-show'>
        <div className='banner-desc'>
          <h3 className='banner-title'>New generation ceramic tile</h3>
          <p className='banner-detail'>Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.</p>
        </div>
        <div className='banner-video'>
        <Image src={images.video} alt="video"/>
      </div>
      </div>
      <div className="banner-dots">
        <div className="dot"></div>
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Banner;