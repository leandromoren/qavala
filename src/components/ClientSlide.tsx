"use client";
import React, { useEffect, useState } from "react";
import clientsData from "../fixtures/clientsData.json";
import styles from "../styles/ClientSlide.module.css";
import { TTexts } from "../utils/textConstants";
import LowStadistics from "./LowStadistics";

export default function ClientSlider() {
  const [data, setData] = useState<
    {
      id: number;
      nombre: string;
      logo: string;
    }[]
  >([]);

  useEffect(() => {
    setData(clientsData);
  }, []);

  return (
    <>
      <h3 id="clientsId" className={styles.title}>
        {TTexts.clientSlideMainText}
      </h3>
      <div className={styles.sliderContainer}>
        <div className={styles.logosContainer}>
          {clientsData.map((client) => (
            <div key={client.id} className={styles.logoItem}>
              <img
                src={`/${process.env.PUBLIC_URL}/${client.logo}`}
                alt={client.nombre}
              />
            </div>
          ))}
          {/* Repetimos los logos para que den la vuelta */}
          {clientsData.map((client) => (
            <div key={client.id + "repeat"} className={styles.logoItem}>
              <img
                src={`/${process.env.PUBLIC_URL}/${client.logo}`}
                alt={client.nombre}
              />
            </div>
          ))}
        </div>
        <hr className={styles.line} />
        <LowStadistics />
      </div>
    </>
  );
}
