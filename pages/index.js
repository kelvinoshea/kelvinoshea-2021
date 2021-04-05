import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Dribbble, Instagram, LinkedIn, Twitter } from '../components/Icons/index'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kelvin O'Shea - Product Designer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kelvin O'Shea - Product Design @ Clipchamp"/>
          <meta name="author" content="Kelvin O'Shea"/>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
          <meta http-equiv='content-type' content='text/html; charset=utf-8'/>
	        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimal-ui, user-scalable=0'/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Kelvin O'Shea
        </h1>

        <p className={styles.description}>
          Product Designer @{' '}
          <a
            href="https://clipchamp.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clipchamp
          </a>
        </p>

      </main>

      <footer className={styles.iconContainer}>
        <span><LinkedIn/></span>   
        <span><Dribbble/></span>
        <span><Twitter/></span>
        <span><Instagram/></span>
      </footer>
    </div>
  )
}
