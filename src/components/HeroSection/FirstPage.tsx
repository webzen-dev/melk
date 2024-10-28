import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  MdOutlineSupportAgent,
  MdSubdirectoryArrowRight,
} from "react-icons/md";

const FirstPage: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isPwa, setIsPwa] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsPwa(window.matchMedia("(display-mode: standalone)").matches);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handlePwaInstall = () => {
    if (deferredPrompt) {
      const promptEvent = deferredPrompt as any;
      promptEvent.prompt();
      promptEvent.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the PWA installation");
          setIsPwa(true);
        } else {
          console.log("User dismissed the PWA installation");
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleContinue = () => {
    navigate("/step-two");
  };

  return (
    <div className="home-hero-section">
      <div className="first-page">
        <div className="box">
          <div className="title">
            املاک تراس راهی سریع و مطمئن برای خانه‌دار شدن
          </div>
          <div className="caption">
            شما در اپلیکیشن املاک تراس دسترسی به داغ‌ترین فایل‌های روز را دارید
          </div>

          <div className={`download-item ${isPwa ? "disabled" : ""}`}>
            <a href="#" className={`item ${isPwa ? "disabled" : ""}`}>
              دانلود از بازار
              <img src="/images/cafebazar.svg" alt="" />
            </a>
            <a href="#" className={`item ${isPwa ? "disabled" : ""}`}>
              دانلود از Google Play
              <img src="/images/googleplay.svg" alt="" />
            </a>

            <div className="item" onClick={handleContinue}>
              ادامه در نسخه‌ی وب
              <FaArrowLeft />
            </div>
            <div
              className="item pwa-item"
              onClick={isPwa ? handleContinue : handlePwaInstall}
            >
              <span>{isPwa ? " ادامه در" : "دانلود نسخه‌ی"}</span>
              {isPwa ? (
                ""
              ) : (
                <div className="child-box">
                  <span>مخصوص گوشی‌های آیفون</span>
                  <MdSubdirectoryArrowRight />
                </div>
              )}
              <img src="/images/pwa.svg" alt="PWA Icon" />
            </div>

            <div className={`item main ${isPwa ? "disabled" : ""}`}>
              ارتباط با ما
              <MdOutlineSupportAgent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
