import Image from 'next/image'
import styles from './page.module.css'
import rightImg from "../../public/assets/images/illustration-sign-up-desktop.svg"
import listImg from "../../public/assets/images/icon-list.svg"
import Form from './components/Form/Form'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ["latin"],weight:['500']})

export default function Home() {
  return (
   <section className={styles.container}>
    <div className={styles.wrapper}>
      <div style={roboto.style} className={styles.leftDiv}>
        <h1>Stay updated!</h1>
        <p className={styles.subHeading}>Join 60,000+ product managers receving monthly updates on:</p>
        <ul className={styles.listDiv}>
          <li className={styles.listItem}>
            <Image src={listImg} />
            <p>Product discovery and building what matters</p>
          </li>
          <li className={styles.listItem}>
            <Image src={listImg} />
            <p>  Measuring to ensure updates are a success</p>
          </li>
          <li className={styles.listItem}>
            <Image src={listImg} />
            <p>And much more!</p>
          </li>
        </ul>
        <Form />
      </div>
      <div className={styles.rightDiv} >
        <Image src={rightImg} alt='right image' style={{height: "92%"}} />
      </div>
    </div>
   </section>
  )
}
