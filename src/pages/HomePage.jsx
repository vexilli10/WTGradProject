import React from 'react'
import HeroSection from '../components/HeroSection'
import BrandStrip from '../components/BrandStrip'
import FeaturedGrid from '../components/FeaturedGrid'
import BestsellerSection from '../components/BestSellerSection'
import PromoSplit from '../components/PromoSplit'
import ServicesSection from '../components/ServicesSection'
import FeaturedPostsSection from '../components/FeaturedPostsSection'

function HomePage() {
    return (
      <>
      <HeroSection />
      <BrandStrip />
      <FeaturedGrid />
      <BestsellerSection />
      <PromoSplit />
      <ServicesSection />
      <FeaturedPostsSection />
     <section className="flex items-center justify-center py-20">
       <p className="text-gray-500">
         (More sections coming soon…)
       </p>
     </section>
     </>
    )
  }
  
  export {HomePage as default}