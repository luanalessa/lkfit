import React from 'react';
import Header from './components/header';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/home';
import Services from './pages/services';
import Testimoniais from './pages/testimonials';
import Contact from './pages/contact';
import Footer from './components/footer';
import FAQ from './pages/faq';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Services />
      <Testimoniais/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}