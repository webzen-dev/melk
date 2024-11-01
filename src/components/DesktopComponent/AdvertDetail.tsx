import React, { useEffect, useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { FaCarRear, FaWarehouse } from "react-icons/fa6";
import { GiElevator } from "react-icons/gi";

type Advert = {
  id: number;
  address: string;
  dealType: string;
  price: number;
  area: number;
  bedrooms: number;
  floor: number;
  publicationDate: string;
  images: string[];
  amenities: {
    name: string;
    available: boolean;
  }[];
  totalFloors: number;
  ownerName: string;
  ownerContact: string;
  documentStatus: string;
  description: string;
  age: number;
  propertyType: string;
};

const AdvertDetail: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const [adverts,setAdverts ] = useState<Advert[]>([
    {
      id: 1,
      address: "تهران، پاسداران",
      dealType: "فروش",
      price: 5000000000,
      area: 150,
      bedrooms: 3,
      floor: 2,
      publicationDate: "1402-07-10",
      images: [
        "/images/3.jpeg",
        "/images/2.jpeg",
        "/images/5.jpeg",
        "/images/3.jpeg",
      ],
      amenities: [
        { name: "elevator", available: true },
        { name: "parking", available: true },
        { name: "storage", available: false },
        { name: "roof_garden", available: false },
      ],
      totalFloors: 5,
      ownerName: "آقای احمدی",
      ownerContact: "09123456789",
      documentStatus: "در دست اقدام",
      propertyType: "آپارتمان",
      description: "یک آپارتمان شیک و مدرن واقع در پاسداران تهران...",
      age: 2,
    },
    {
      id: 2,
      address: "مشهد - هاشمیه 64",
      dealType: "فروش",
      price: 5200000000,
      area: 122,
      bedrooms: 2,
      floor: 3,
      publicationDate: "1402-07-10",
      images: ["/images/2.jpeg", "/images/5.jpeg", "/images/3.jpeg"],
      amenities: [
        { name: "elevator", available: true },
        { name: "parking", available: true },
        { name: "storage", available: false },
        { name: "roof_garden", available: false },
      ],
      totalFloors: 5,
      ownerName: "آقای رضایی",
      ownerContact: "09123456788",
      documentStatus: "سند شش دانگ",
      description: "توضیحات درباره آپارتمان هاشمیه...",
      age: 212,
      propertyType: "آپارتمان",
    },
    {
      id: 3,
      address: "تهران - میدان ونک",
      dealType: "اجاره",
      price: 3000000000,
      area: 80,
      bedrooms: 1,
      floor: 1,
      publicationDate: "1402-07-05",
      images: [],
      amenities: [
        { name: "elevator", available: false },
        { name: "parking", available: true },
        { name: "storage", available: true },
        { name: "roof_garden", available: false },
      ],
      totalFloors: 4,
      ownerName: "خانم حسینی",
      ownerContact: "09123456789",
      documentStatus: "در دست اقدام",
      description: "یک واحد اجاره ای در میدان ونک...",
      age: 2,
      propertyType: "آپارتمان",
    },
  ]);

  const advert = adverts.find((ad) => ad.id.toString() === code);
  const [mainImage, setMainImage] = useState<string>(
    advert?.images[0] || "/images/no-image.jpg"
  );

  useEffect(() => {
    if (advert) {
      setMainImage(advert.images[0] || "/images/no-image.jpg");
    }
  }, [advert]);

  if (!advert) {
    return <div>آگهی پیدا نشد</div>;
  }

  return (
    <div className="advert-detail">
      <div className="routing">
        <Link to={"/"}>خانه</Link>
        <MdOutlineChevronLeft />
        <Link to={"/adverts"}>آگهی ها</Link>
        <MdOutlineChevronLeft />
        <span>{advert.address}</span>
      </div>
      <div className="parrent-box">
        <div className="box">
          <div className="title">
            {advert.propertyType} {advert.area} متری
          </div>
          <div className="date">{advert.publicationDate}</div>
          <div className="address">{advert.address}</div>
          <div className="info">
            <div className="child-box">
              <span>سال ساخت</span>
              <span>{1403 - advert.totalFloors}</span>
            </div>
            <div className="line"></div>
            <div className="child-box">
              <span>متراژ</span>
              <span>{advert.area}</span>
            </div>
            <div className="line"></div>
            <div className="child-box">
              <span>اتاق</span>
              <span>{advert.bedrooms}</span>
            </div>
          </div>
          <div className="about-price">
            <div className="child-box">
              <span>قیمت کل </span>
              <span>{advert.price.toLocaleString()}</span>
              <span> تومان</span>
            </div>
            <div className="child-box">
              <span>قیمت هر متر </span>
              <span>{(advert.price / advert.area).toLocaleString()}</span>
              <span> تومان</span>
            </div>
            <div className="child-box">
              <span>طبقه</span>
              <span>{advert.floor}</span>
            </div>
          </div>
          <div className="amenities">
            <div className="title">ویژگی ها و امکانات</div>
            <div className="box">
              <div className="child-box">
                <GiElevator />
                {advert.amenities.find((a) => a.name === "elevator")?.available
                  ? "آسانسور"
                  : "بدون آسانسور"}
              </div>
              <div className="line"></div>
              <div className="child-box">
                <FaCarRear />
                {advert.amenities.find((a) => a.name === "parking")?.available
                  ? "پارکینگ"
                  : "بدون پارکینگ"}
              </div>
              <div className="line"></div>
              <div className="child-box">
                <FaWarehouse />
                {advert.amenities.find((a) => a.name === "storage")?.available
                  ? "انباری"
                  : "بدون انباری"}
              </div>
            </div>
          </div>
          <div className="description">
            <div className="title">توضیحات </div>
            <div className="text">{advert.description}</div>
          </div>
        </div>
        <div className="box image-box">
          <img
            src={mainImage}
            alt=""
            className="larg"
            style={{ cursor: "pointer" }}
          />
          <div className="images">
            {advert.images.length > 1 ? (
              advert.images
                .slice(1)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="small"
                    onClick={() => setMainImage(image)}
                    style={{ cursor: "pointer" }} 
                  />
                ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertDetail;
