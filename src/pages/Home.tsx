import { Hero } from '../components/sections/Hero';
import { QualityAssurance } from '../components/sections/QualityAssurance';
import { BestSellers } from '../components/sections/BestSellers';
import { SignatureCollection } from '../components/sections/SignatureCollection';
import { Workflow } from '../components/sections/Workflow';
import { WholesaleCta } from '../components/sections/WholesaleCta';
// import { ShopGridSection } from '../components/sections/ShopGridSection';
import { QuoteForm } from '../components/sections/QuoteForm';
import { BrandLogos } from '../components/sections/BrandLogos';
import { StatsBanner } from '../components/sections/StatsBanner';
import { Testimonials } from '../components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Workflow />
      <SignatureCollection />
      <QuoteForm />
      {/* <ShopGridSection /> */}
      <BrandLogos />
      <QualityAssurance />
      <WholesaleCta />
      <StatsBanner />
      <Testimonials />
    </>
  );
}
