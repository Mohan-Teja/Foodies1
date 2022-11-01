import Head from 'next/head'

import Header from '../components/Header'
import Row from '../components/Row'

import requests from '../utils/requests'

export async function getStaticProps() {

  const [
    allRecipes
  ] = await Promise.all([
    fetch(requests.fetchAllRecipes, { 'method': 'GET' }).then((res) => res.json())
  ])

  return {
    props: {
      allRecipes,
    },
  }
}

export default function Home({ allRecipes }) {
  return (
    <div>
      <Head>
        <title>Foodies | Taste Heavenly Recepies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
        <section className="md:space-y-24">
          {
            (allRecipes) ? (
              <Row title="Popular Recipes" allRecipes={allRecipes} />
            ) : null
          }
        </section>
      </main>

    </div>
  )
}
