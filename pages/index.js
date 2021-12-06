import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Dribbble, Instagram, LinkedIn, Twitter, Logo } from '../components/Icons/index'

export default function Home() {
  return (
    <div className={styles.layout}>
        <Head>
          <title>Kelvin O'Shea - Product Designer</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta name="description" content="Kelvin O'Shea - Product Designer @ Clipchamp, Microsoft"/>
          <meta name="author" content="Kelvin O'Shea"/>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
          <meta http-equiv='content-type' content='text/html; charset=utf-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, minimal-ui, user-scalable=0'/>
        </Head>



          <div className={styles.container}>
            <div className={styles.logo}>
              <img className={styles.image}src="https://media-exp1.licdn.com/dms/image/C5616AQEclfwNOcVknA/profile-displaybackgroundimage-shrink_350_1400/0/1578272525752?e=1643846400&v=beta&t=JcHB64PowJNumh4oM__-_GL1mZiIwkG-PdI1_HS1-DE" />
              <Logo/>
            </div>
            <div className={styles.details}>
              <div className={styles.description}>
                <div className={styles.title}>
                  <span className={styles.name}>Kelvin O'Shea</span>
                </div>
                <span className={styles.divider}>•</span>
                <div className={styles.occupation}>
                  <span className={styles.role}>Designer</span>
                  <span className={styles.arrow}>-></span>
                  <span className={styles.employer}>
                    <a
                      href="https://clipchamp.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Clipchamp, Microsoft
                    </a>
                  </span>
                </div>
              </div>

                <div className={styles.iconContainer}>
                  <span><LinkedIn/></span>   
                  <span><Dribbble/></span>
                  <span><Twitter/></span>
                  <span><Instagram/></span>
                </div>
            </div>
          </div>
      </div>
  )
}
