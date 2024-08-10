import React from 'react'
import Nav from './components/Nav'
import Hero from "./sections/Hero";
import PopularProducts from "./sections/Popular";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import CustomerReviews from "./sections/CustomerReviews";
import SpecialOffer from "./sections/SpecialOffer";
import Subscriber from "./sections/Subscriber";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b"><Hero /></section>
      <section className="padding"><PopularProducts /></section>
      <section className="padding"><SuperQuality /></section>
      <section className="padding-x py-10"><Services /></section>
      <section className="padding"><SpecialOffer /></section>
      <section className="padding bg-pale-blue"><CustomerReviews /></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscriber /></section>
      <section className="bg-black padding-x padding-t pb-8"><Footer /></section>
    </main>
  );
}

export default App