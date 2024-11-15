import { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ImageSliderProps {
    images: string[]; 
    onClose: () => void;
  }
  
  const ImageSlider: React.FC<ImageSliderProps> = ({ images, onClose }) => {
    const [mainImage, setMainImage] = useState<string>(images[0] || "/images/no-image.jpg");
  
    return (
      <div className="image-slider-advert">
        <div className="box">
          <div className="image-slider">
            <div className="larg">
              <img src={mainImage} alt="Main Image" />
            </div>
  
            <div className="small">
              {images && images.length > 0 ? (
                images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    onClick={() => setMainImage(image)}
                    style={{
                      cursor: "pointer",
                      border: mainImage === image ? "2px solid blue" : "none",
                    }}
                  />
                ))
              ) : (
                <p>تصویری موجود نیست</p>
              )}
            </div>
          </div>
        </div>
        <button className="close" onClick={onClose}>
        <IoMdClose />

        </button>
      </div>
    );
  };
  
  export default ImageSlider;
  