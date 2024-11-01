import React, { useState } from "react";
import {
  MdDateRange,
  MdOutlineBed,
  MdOutlineDocumentScanner,
  MdOutlineElevator,
  MdOutlineHomeWork,
  MdOutlineSchedule,
} from "react-icons/md";
import { Link } from "react-router-dom";

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

const numberToWordsShort = (num: number): string => {
  const num2persian = require("num2persian").default;
  const words = num2persian(num);

  const mainUnits = ["میلیارد", "میلیون", "هزار"];
  for (let unit of mainUnits) {
    const index = words.indexOf(unit);
    if (index !== -1) {
      return words.slice(0, index + unit.length);
    }
  }
  return words;
};

const ListOfAdverts: React.FC = () => {
  const [adverts, setAdverts] = useState<Advert[]>([
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
      images: [], // No images for this advert
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

  const getPersianMonth = (month: number) => {
    const persianMonths = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    return persianMonths[month - 1];
  };

  return (
    <div className="list-of-adverts-desktop">
      {adverts.map((advert, index) => {
        const [year, month, day] = advert.publicationDate
          .split("-")
          .map(Number);
        const perMeterPrice = Math.round(advert.price / advert.area);
        const imageSrc =
          advert.images.length > 0 ? advert.images[0] : "/images/no-image.jpg";

        return (
          <Link to={`/adverts/${advert.id}`} className="advert" key={index}>
            <div className="box">
              <div className="child-box">
                <img src={imageSrc} alt={advert.dealType} />
                <div className="info">
                  <div className="date">
                    <MdDateRange />
                    <span>{day}</span>
                    <span>{getPersianMonth(month)}</span>
                    <span>{year}</span>
                  </div>
                  <div className="address">{advert.address}</div>
                  <div className="type">
                    <span>{advert.dealType}</span>{" "}
                    <span>{advert.propertyType}</span>
                  </div>
                </div>
              </div>
              <div className="child-box">
                <span>
                  <MdOutlineHomeWork />
                  <p>{advert.totalFloors} طبقه</p>
                </span>
                <span>
                  <MdOutlineBed />
                  <p>{advert.bedrooms} خوابه</p>
                </span>
                <span>
                  <MdOutlineSchedule />
                  <p>{advert.age} سال ساخت</p>
                </span>
                <span>
                  <MdOutlineDocumentScanner />
                  {advert.documentStatus}
                </span>
                {advert.amenities.find((a) => a.name === "elevator")
                  ?.available && (
                  <span>
                    <MdOutlineElevator />
                    <p>آسانسور</p>
                  </span>
                )}
              </div>
            </div>
            <div className="box">
              <div className="code">
                <span>کد فایل :</span>
                <span>{advert.id}</span>
              </div>
              <div className="total-amount">
                <span>
                  مبلغ کل : <span>{advert.price.toLocaleString()}</span> تومان
                </span>
                <div className="caption">
                  {numberToWordsShort(advert.price)} تومان
                </div>
              </div>
              <div className="price">
                <span>
                  متری : <span>{perMeterPrice.toLocaleString()}</span> تومان
                </span>
                <div className="caption">
                  {numberToWordsShort(perMeterPrice)} تومان
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListOfAdverts;
