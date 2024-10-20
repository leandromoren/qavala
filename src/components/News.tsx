"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import styles from "../styles/News.module.css";
import newsData from "../fixtures/news.json";
import { TTexts } from "@/utils/textConstants";
import Image from "next/image";

export default function News() {
  const [data, setData] = useState(newsData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setData(newsData);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.titleContainer}>{TTexts.newsTitleMain}</h2>
      <Carousel {...settings} autoplay className={styles.carouselMain}>
        {data.map((n) => (
          <div key={n.id} className={styles.carouselItem}>
            <Image className={styles.image} src={n.image} alt={n.title} />
            <div className={styles.date}>Publicado el: {n.date}</div>
            <div className={styles.title}>{n.title}</div>
            <div className={styles.description}>{n.description}</div>
            <a href={n.link} className={styles.button}>
              Ver más
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
