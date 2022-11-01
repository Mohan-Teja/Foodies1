import React from 'react'
import Row from '../components/Row'

import requests from './utils/requests'

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Foodies | Taste Heavenly Food</title>
        </Helmet>
        
        <Header />

        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
          <section className="md:space-y-24">
            <Row title="Trending Now" allRecipes={props.allRecipes} />
          </section>
        </main>

      </div>
    </HelmetProvider>
  )
}

export default Home