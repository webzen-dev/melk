import { useState, useEffect } from "react";

const HomeContainer = () => {
  const [score, setScore] = useState<number>(10);
  const [remainingDays, setRemainingDays] = useState<number>(10);
  const [remainingMonths, setRemainingMonths] = useState<number>(
    Math.floor(remainingDays / 30)
  );
  const [user, setUser] = useState<number>(5);
  const maxDays = 300;
  const calculateRemainingMonths = (days: number) => {
    return Math.floor(days / 30);
  };
  const calculateLineWidth = (days: number) => {
    const widthPercentage = (days / maxDays) * 100;
    return widthPercentage > 100 ? 100 : widthPercentage;
  };
  useEffect(() => {
    const months: number = calculateRemainingMonths(remainingDays);
    setRemainingMonths(months);
  }, [remainingDays]);

  return (
    <div className="home-container">
      <div className="title">املاک پلاس</div>
      <div className="parent-box">
        <div className="box">
          <div className="score-box">
            <img src="images/medal.png" alt="score icon" />
            <div className="score">{score}</div>
            <span>امتیاز</span>
          </div>
          <div className="child-box">
            <div className="info-account">
              <span>اکانت</span>
              {/* A warning message when there are less than one month remaining */}

              {/* <span>
                {remainingDays <= 30
                  ? "کمتر از یک ماه"
                  : `${remainingMonths} ماهه`}
              </span> */}

              {/* If less than 30 days are remaining, show the remaining days, otherwise show the remaining months */}
              <span>
                {remainingDays <= 30
                  ? `${remainingDays} روزه`
                  : `${remainingMonths} ماهه`}
              </span>
            </div>
            <div className="loader">
              {/* ماهه */}
              <div
                className="line"
                style={{
                  width: `${calculateLineWidth(remainingDays)}%`,
                }}
              ></div>
            </div>
            <div className="info-days">
              <span> {remainingDays} </span>
              روز باقی مانده - {user} کاربره
            </div>
          </div>
        </div>
        <div className="box">
          <input type="text" placeholder="جستجوی ملک مورد نظر شما" />
          <img src="images/search.png" alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
