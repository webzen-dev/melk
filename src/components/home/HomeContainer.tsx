import { useState, useEffect } from "react";

const HomeContainer = () => {

  return (
    <div className="home-container">
      <div className="title">
        <span>املاک تراس</span>
      </div>
      <div className="parent-box">

        <div className="box search-box">
          <input type="text" placeholder="جستجوی ملک مورد نظر شما" />
          <img src="images/search.png" alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
