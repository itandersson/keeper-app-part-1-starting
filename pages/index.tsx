import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>keeper-app-part-1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className={styles.main}>

      </main>

      <Footer></Footer>
      
    </>
  )
}
