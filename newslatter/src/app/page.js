"use client";
import Image from "next/image";
import styles from "./page.module.css";
import rightImg from "../../public/assets/images/illustration-sign-up-desktop.svg";
import listImg from "../../public/assets/images/icon-list.svg";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });
const robotoThnx = Roboto({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  const [addEmail, setAddEmail] = useState("");

  const handleDismiss = () => {
    setAddEmail("")
  }
  return (
    <section className={styles.container}>
      
        {addEmail ? (
          <div className={styles.thnxWrapper} style={roboto.style}>
            <Image src={listImg} alt="ticks" height={50} width={50} style={{marginBottom: 25}}/>
            <h1 style={robotoThnx.style}> Thanks for subscribing! </h1>
            <p style={{margin: '25px 0'}}>
            A confirmation email has been sent to <strong>{addEmail}. {""}</strong> 
            Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={handleDismiss} style={{fontWeight: 200,width: "100%"}} className={styles.dismissBtn}>Dismiss message</button>
          </div>
        ) : (
          <div className={styles.wrapper}>
            <div style={roboto.style} className={styles.leftDiv}>
              <h1>Stay updated!</h1>
              <p className={styles.subHeading}>
                Join 60,000+ product managers receving monthly updates on:
              </p>
              <ul className={styles.listDiv}>
                <li className={styles.listItem}>
                  <Image src={listImg} alt="ticks" />
                  <p>Product discovery and building what matters</p>
                </li>
                <li className={styles.listItem}>
                  <Image src={listImg} alt="ticks" />
                  <p> Measuring to ensure updates are a success</p>
                </li>
                <li className={styles.listItem}>
                  <Image src={listImg} alt="ticks" />
                  <p>And much more!</p>
                </li>
              </ul>
              <Form setAddEmail={setAddEmail} />
            </div>
            <div className={styles.rightDiv}>
              <Image
                src={rightImg}
                alt="right image"
                className={styles.imageClass}
              />
            </div>
          </div>
        )}
      
    </section>
  );
}
