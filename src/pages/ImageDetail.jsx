import { useParams } from 'react-router-dom';
import vw from '../public/vw.png';
import jewelry from '../public/jewelry.png';
import jewelry2 from '../public/jewelry2.png';
import jewelry3 from '../public/jewelry3.png';
import color from '../public/color.png'; // example extra images
import color2 from '../public/color2.png';
import './ImageDetail.css';

function ImageDetail() {
  const { id } = useParams();

  const imageData = {
    color: {
      title: 'Sofa Color',
      description: 'Creative office goals.',
      videoSrc: '/videos/color-showcase.mp4', // or YouTube/embed
      gallery: [color2, color], // add more if you want
    },
    jewelry: {
      title: 'Jewelry Campaign',
      description: 'Luxury close-ups and editorial lighting.',
      videoSrc: '/videos/jewelry-showcase.mp4',
      gallery: [jewelry, jewelry2, jewelry3],
    },
    vw: {
      title: 'Automobile Shoot',
      description: 'Automobile',
      videoSrc: '/videos/auto-showcase.mp4',
      gallery: [vw],
    },
  };

  const current = imageData[id];

  if (!current) return <h2 style={{ textAlign: 'center' }}>Project not found!</h2>;

  return (
    <div className="image-detail-page">
      <h1>{current.title}</h1>
      <p className="project-description">{current.description}</p>

      <div className="video-wrapper">
        <video src={current.videoSrc} controls />
      </div>

      <div className="gallery-grid">
        {current.gallery.map((img, idx) => (
          <img src={img} alt={`${current.title} ${idx}`} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default ImageDetail;
