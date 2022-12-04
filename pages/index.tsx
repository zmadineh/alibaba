import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tabview from '../components/home/tabview/Tabview'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      
      <Tabview/>
      

    </div>
  )
}
