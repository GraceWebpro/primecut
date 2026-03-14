import React, { useEffect, useState, useMemo } from 'react'
import Hero from '../components/sections/Hero'
import Testimonials from '../components/sections/Testimonials'
import AboutPremium from '../components/sections/AboutPremium'
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../components/hooks/useScrollSpy";
import { Helmet } from 'react-helmet'
import OurServices from '../components/sections/OurServices'
import TransformationsSection from '../components/sections/Transformation'
import TeamSection from '../components/sections/TeamSection'
import GallerySection from '../components/sections/GallerySection'
import BookingSection from '../components/sections/BookingSection'
import PricingSection from '../components/sections/PricingSection'
import FooterCTA from '../components/sections/FooterCTA'
import FAQ from '../components/sections/FAQ';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  return (
    <div>

      <Helmet>
        <title>PrimeCut | Premium Barbershop Website Template by GraceTech</title>
        <meta
          name="description"
          content="PrimeCut offers premium barber services including haircuts, beard grooming and luxury treatments."
        />
      
        <meta property="og:title" content="PrimeCut | Premium Barbershop Website" />
        <meta property="og:description" content="Modern React + Tailwind barbershop UI template." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
      </Helmet>
      <main>
        <Hero />

        <AboutPremium />

        <OurServices />

        <TransformationsSection />

        <GallerySection />

        <TeamSection />

        <PricingSection />

        <Testimonials />

        <FAQ />

        <BookingSection />

        <FooterCTA />
      </main>

    </div>
  )
}

export default Home
