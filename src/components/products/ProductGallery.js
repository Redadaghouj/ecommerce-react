import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import mobile from '../../assets/images/mobile.png';
import mobile1 from '../../assets/images/mobile1.png';
import mobile2 from '../../assets/images/mobile2.png';
import RightButton from './RightButton';
import LeftButton from './LeftButton';

function ProductGallery() {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile1}`,
    },
    {
      original: `${mobile2}`,
    },
  ];
  return (
    <div
      className='product-gallery-card d-flex justify-content-center align-items-center
    pt-2'
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        isRTL={true}
        renderLeftNav={LeftButton}
        renderRightNav={RightButton}
      />
    </div>
  );
}

export default ProductGallery;
