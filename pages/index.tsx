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
        <title>PFaith | make your IT Career</title>
        <meta name="title" content="PFaith | make your IT Career"/>
        <meta name="description" content="Get your dream job in IT by training and working with us."/>
        <meta name="tags" content="PFaith, IT, DevOps, SRE, Web Development, Hire, Jobs"/>

        <meta property="og:title" content="PFaith | make your IT Career" />
        <meta property="og:description" content="Get your dream job in IT by training and working with us." />
        <meta property="og:image" content="/pfaith_logo_white.jpg" />


        <link rel="icon" href="/pfaith_logo_white.jpg" />
        <link rel="preload" href="/pfaith_logo_light.png" as="image" />
      </Head>

      <Hero />
      <Services />
      <Management />
    </>
  )
}

export default Home
