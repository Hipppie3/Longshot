import { useParams } from 'react-router-dom';
import vw from '../public/vw.png';
import jewelry from '../public/jewelry.png'


function ImageDetail() {
  const { id } = useParams(); // Get the dynamic ID from the URL

  // Sample dynamic content
  const imageData = {
    vw: {
      title: 'Volkswagen',
      description: 'This is a classic Volkswagen, known for its sleek design and efficiency.',
      imgSrc: vw,
    },
    jewelry: {
      title: 'Jewelry',
      description: 'Luxury and performance combined in one of the most iconic car brands.',
      imgSrc: jewelry,
    },
  };

  const currentImage = imageData[id];

  if (!currentImage) {
    return <h2>Image not found!</h2>;
  }

  return (
    <div className="image-detail">
      <h1>{currentImage.title}</h1>
      <img src={currentImage.imgSrc} alt={currentImage.title} />
      <p>{currentImage.description}</p>
    </div>
  );
}

export default ImageDetail;
