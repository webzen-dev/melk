import { TiLocationOutline } from "react-icons/ti";
import { CiBookmark } from "react-icons/ci";
import { BsCamera, BsFillShareFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import ShareFile from "./ShareFile";

const AdvertsBox = () => {
  const data = [
    {
      id: 1,
      address: "تهران، پاسداران",
      dealType: "فروش",
      price: 5000000000,
      area: 150,
      bedrooms: 3,
      floor: 2,
      publicationDate: "1402-07-10",
      images: ["/images/1.jpg", "/images/2.jpg"],
      amenities: [
        { name: "elevator", available: true },
        { name: "parking", available: true },
        { name: "storage", available: false },
        { name: "roof_garden", available: false },
      ],
      unitsPerFloor: 2122,
      orientation: "جنوبی",
      propertyType: "آپارتمان",
      description: "یک آپارتمان شیک و مدرن واقع در پاسداران تهران...",
      totalFloors: 5,
      ownerName: "آقای احمدی",
      ownerContact: "09123456789",
      documentStatus: "در دست اقدام",
    },
    {
      id: 12123,
      address: "تهران، پاسداران",
      dealType: "فروش",
      price: 5000000000,
      area: 150,
      bedrooms: 3,
      floor: 2,
      publicationDate: "1402-07-10",
      images: ["/images/1.jpg", "/images/2.jpg"],
      amenities: [
        { name: "elevator", available: true },
        { name: "parking", available: true },
        { name: "storage", available: false },
        { name: "roof_garden", available: false },
      ],
      unitsPerFloor: 2122,
      orientation: "جنوبی",
      propertyType: "آپارتمان",
      description: "یک آپارتمان شیک و مدرن واقع در پاسداران تهران...",
      totalFloors: 5,
      ownerName: "آقای احمدی",
      ownerContact: "09123456789",
      documentStatus: "در دست اقدام",
    },
    {
      id: 1221,
      address: "تهران، پاسداران",
      dealType: "فروش",
      price: 5000000000,
      area: 150,
      bedrooms: 3,
      floor: 2,
      publicationDate: "1402-07-10",
      images: ["/images/1.jpg", "/images/2.jpg"],
      amenities: [
        { name: "elevator", available: true },
        { name: "parking", available: true },
        { name: "storage", available: false },
        { name: "roof_garden", available: false },
      ],
      unitsPerFloor: 2,
      orientation: "جنوبی",
      propertyType: "آپارتمان",
      description: "یک آپارتمان شیک و مدرن واقع در پاسداران تهران...",
      totalFloors: 5,
      ownerName: "آقای احمدی",
      ownerContact: "09123456789",
      documentStatus: "در دست اقدام",
    },
    {
      id: 1222,
      address: "تهران، پاسداران",
      dealType: "فروش",
      price: 5000000000,
      area: 150,
      bedrooms: 3,
      floor: 2,
      publicationDate: "1402-07-10",
      images: ["/images/1.jpg", "/images/2.jpg"],
      amenities: [
        { name: "elevator", available: true },
        { name: "parking", available: true },
        { name: "storage", available: false },
        { name: "roof_garden", available: false },
      ],
      unitsPerFloor: 2,
      orientation: "جنوبی",
      propertyType: "آپارتمان",
      description: "یک آپارتمان شیک و مدرن واقع در پاسداران تهران...",
      totalFloors: 5,
      ownerName: "آقای احمدی",
      ownerContact: "09123456789",
      documentStatus: "در دست اقدام",
    },
  ];

  const [showNumberModal, setShowNumberModal] = useState<boolean>(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const copyToClipboard = (text: string): void => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("شماره تماس کپی شد!");
        })
        .catch((err) => {
          console.error("کپی به کلیپ‌بورد موفقیت‌آمیز نبود:", err);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          alert("شماره تماس کپی شد!");
        } else {
          console.error("کپی به کلیپ‌بورد موفقیت‌آمیز نبود.");
        }
      } catch (err) {
        console.error("مشکل در کپی به کلیپ‌بورد:", err);
      }

      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="advert-box">
      {data.map((item) => (
        <div
          className={`advert-item ${expandedId === item.id ? "expanded" : ""}`}
          key={item.id}
        >
          <div className="first-section">
            <div className="description-box">
              <div className="box">
                <span>
                  <TiLocationOutline />
                </span>
                <span>
                  {item.address.length > 12
                    ? item.address.substring(0, 12) + "..."
                    : item.address}
                </span>
                <span
                  style={
                    item.dealType === "رهن و اجاره"
                      ? { background: "rgba(250, 166, 26, 1)" }
                      : { background: "rgba(86, 196, 207, 1)" }
                  }
                >
                  {item.dealType}
                </span>
              </div>
              <div className="address">
                {item.address.length > 30
                  ? item.address.substring(0, 30) + "..."
                  : item.address}
              </div>
              <div className="box">
                <div className="child-box">
                  <span>قیمت : </span>
                  <span>
                    {item.price >= 1000000000
                      ? (item.price / 1000000000).toLocaleString() + " میلیارد"
                      : (item.price / 1000000).toLocaleString() + " میلیون"}
                  </span>
                </div>
                <div className="child-box">
                  <span> متر مربع : </span>
                  <span>
                    {item.price / item.area >= 1000000000
                      ? (item.price / item.area / 1000000000).toFixed(1) +
                        " میلیارد"
                      : (item.price / item.area / 1000000).toFixed(1) +
                        " میلیون"}
                  </span>
                </div>
              </div>
            </div>
            <div className="image-box">
              <img src="images/1.jpg" alt="" />
              <div className="box">
                <span>{item.images.length}</span>
                <BsCamera />
              </div>
            </div>
          </div>
          <div className="info-box">
            <span>{item.area} متر</span>
            <span>{item.bedrooms} خواب</span>
            <span>{item.floor} طبقه</span>
            <span>{item.publicationDate.split("-")[0]}</span>
          </div>
          {expandedId === item.id && (
            <div
              className={`more-description-box ${
                expandedId === item.id ? "expanded" : ""
              }`}
            >
              <div className="amenities-box">
                {item.amenities.map((amenity, index) => (
                  <div className="child-box" key={index}>
                    {amenity.name === "elevator" && (
                      <span
                        className={`${amenity.available ? "true" : "false"}`}
                      >
                        آسانسور
                      </span>
                    )}
                    {amenity.name === "parking" && (
                      <span
                        className={`${amenity.available ? "true" : "false"}`}
                      >
                        پارکینگ
                      </span>
                    )}
                    {amenity.name === "storage" && (
                      <span
                        className={`${amenity.available ? "true" : "false"}`}
                      >
                        انباری
                      </span>
                    )}
                    {amenity.name === "roof_garden" && (
                      <span
                        className={`${amenity.available ? "true" : "false"}`}
                      >
                        روف گارد
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="first-box">
                <div className="child-box">
                  تعداد واحد در هر طبقه : <span>{item.unitsPerFloor}</span>{" "}
                </div>
                <div className="child-box">
                  جهت ملک :<span>{item.orientation}</span>
                </div>
              </div>
              <div className="title">توضیحات بیشتر</div>
              <div className="id">
                <span>کد فایل : </span>
                <span>{item.id}</span>
              </div>
              <div className="property-type">
                {item.propertyType} {item.area} متری
              </div>
              <div className="description">{item.description}</div>
              <div className="box">
                <div className="child-box">
                  طبقه : <span>{item.floor}</span>
                </div>{" "}
                <div className="child-box">
                  تعداد کل طبقات : <span>{item.totalFloors}</span>
                </div>{" "}
                <div className="child-box">
                  تعداد واحد در هر طبقه : <span>{item.unitsPerFloor}</span>
                </div>{" "}
              </div>
              <div className="owner-info">
                <div className="child-box">
                  نام مالک : <span>{item.ownerName} </span>
                </div>
                <div className="child-box">
                  وضعیت سند : <span> {item.documentStatus}</span>
                </div>
              </div>
              <button className="report-btn">ارسال گزارش به پشتیبانی</button>
            </div>
          )}
          <div className="cta-box">
            <span>
              <CiBookmark />
            </span>
            <span onClick={() => setShareModal(!shareModal)}>
              <BsFillShareFill />
            </span>
            {shareModal && <ShareFile onClose={() => setShareModal(false)} />}
            <button onClick={() => setShowNumberModal(!showNumberModal)}>
              نمایش شماره
            </button>
            <button
              onClick={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
            >
              توضیحات بیشتر
              <FaChevronDown />
            </button>
          </div>
          {showNumberModal && (
            <div
              className="contact-number-box bg"
              onClick={() => setShowNumberModal(!showNumberModal)}
            >
              <div className="number-box bg">
                <div className="title">
                  <span>شماره تماس مالک : </span>
                  <IoMdClose />
                </div>
                <span
                  className="number"
                  onClick={() => copyToClipboard(item.ownerContact)}
                  style={{ cursor: "pointer" }}
                >
                  {item.ownerContact}
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdvertsBox;
