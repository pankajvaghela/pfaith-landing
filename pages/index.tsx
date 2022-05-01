import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Sections
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Management from '../src/components/Management';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>PFaith | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <Management />
    </>
  )
}

export default Home
