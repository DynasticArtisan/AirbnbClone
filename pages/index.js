import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="data:image/png;base64,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" />
      </Head>
      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            { exploreData?.map((item, index) => (
              <SmallCard { ...item } key={index}/>
            )) }
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            { cardsData?.map((item, index) => (
              <MediumCard {...item} key={index} />
            )) }
          </div>
        </section>

          <LargeCard
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoors'
            description='Wishlists created by airbnb'
            buttonText='Get Inspired'
          />

      </main>
      <Footer/>

    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json())
  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then(res => res.json())  
  return {
    props: {
      exploreData, cardsData
    }
  }
}