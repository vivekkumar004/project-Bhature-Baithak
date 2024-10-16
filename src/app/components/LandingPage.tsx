"use client";

import React, { useEffect, useState } from "react";
import FullPageLoader from "../common/Loader";
import Image from "next/image";
import Logo from "@/app/common/MainLogo.png";
import "./landingPage.scss";
import { IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../configs/firebaseSetup";

function LandingPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quoteData, setQuoteData] = useState<{ quote: string; saidBy: string }>(
    { quote: "", saidBy: "" }
  );
  const [foodMenuData, setFoodMenuData] = useState<
    {
      name: string;
      price: number;
      url: string;
    }[]
  >([]);

  const getQuoteData = async () => {
    const docRef = doc(db, "random Quotes", "OHyTVokidF7UfBpIs2dl");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const quoteArray = docSnap.data()?.quotes;
      const arrayLength = quoteArray.length;
      const randomNumber = Math.floor(Math.random() * arrayLength);
      const quoteData = quoteArray[randomNumber];
      setQuoteData({ quote: quoteData.quote, saidBy: quoteData.saidBy });
    } else {
      // docSnap.data() will be undefined in this case
      setQuoteData({ quote: "NA", saidBy: "NA" });
    }
  };

  const getMenuData = async () => {
    const docRef = doc(db, "food menu list", "XmZuiuWVnFIpGUaRTBR6");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const quoteArray = docSnap.data()?.lists;
      setFoodMenuData(quoteArray);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getQuoteData();
    getMenuData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const openMaps = () => {
    const lat = 13.020312959220602;
    const long = 77.67831513191604;
    window.open("https://maps.google.com?q=" + lat + "," + long);
  };

  const openInstagram = () => {
    window.open("https://instagram.com");
  };

  function sendMail() {
    let link =
      "mailto:bhaturebaithak@gmail.com" +
      "&subject=" +
      encodeURIComponent("Enquiry about the food");
    window.location.href = link;
  }

  return (
    <div>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div className="landingMainPage">
          <div className="headerContainer">
            <div className="logoContainer">
              <Image
                src={Logo}
                alt="Picture of the company"
                height={70}
                width={70}
              />
              <div style={{ marginLeft: "7px" }}>
                <h4 className="company-title">BHATURE BAITHAK</h4>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <p className="management-name">Managed by </p>
                  <h4 style={{ color: "#fff" }}>&nbsp;PAWARS</h4>
                </span>
              </div>
            </div>
            <div className="dialogContainer">
              <p className="random-sayings">&quot;{quoteData.quote}&quot;</p>
              <p className="random-sayings" style={{ marginRight: "0.5rem" }}>
                -{quoteData.saidBy}
              </p>
            </div>
          </div>

          <div className="all-catalog-container">
            {foodMenuData.map((item, index) => (
              <div className="food-menu-container" key={index}>
                <p className="item-name">{item.name}</p>
                <span className="item-price">
                  <CurrencyRupeeIcon sx={{ color: "#000" }} />
                  <p>{item.price}</p>
                </span>

                <div className="image-container">
                  <Image
                    src={item.url}
                    fill
                    alt="Picture of the food"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="footer-container">
            <div className="icons-container">
              <IconButton onClick={openMaps}>
                <LocationOnIcon sx={{ color: "#ff1a1a" }} />
              </IconButton>
              <IconButton onClick={openInstagram}>
                <InstagramIcon sx={{ color: "#ff1a1a" }} />
              </IconButton>

              <Link onClick={sendMail} className="link-text" href="./">
                Get in touch.
              </Link>
            </div>
            <p className="location-text">
              #Bhature Baithak, 29, Old Khatha No.33, Akshaya Nagar 2nd Block,
              Kowdenahalli, KR Puram Hobli, Bengaluru, Karnataka 560016
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
