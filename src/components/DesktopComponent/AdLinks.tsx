import React, { useState } from "react";

type Ad = {
  image: string;
  link: string;
  text: string;
};

const AdLinks: React.FC = () => {
  const [ads, setAds] = useState<Ad[]>([
    {
      image:
        "/images/ad.jpg",
      link: "https://example.com",
      text: "test adv",
    },
    {
      image: "", 
      link: "https://example2.com",
      text: "test 2 Adv",
    },
  ]);

  return (
    <div className="ad-links">
      {ads.map((ad, index) => (
        <a
          key={index}
          href={ad.link}
          className="ad"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: `url(${ad.image || "/images/no-image.jpg"})`, 
          }}
        >
          <p>{ad.text}</p>
          <button>مشاهده</button>
        </a>
      ))}
    </div>
  );
};

export default AdLinks;
