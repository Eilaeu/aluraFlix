import React from 'react';
import Menu from './components/Menu'
import dadosInicais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "#141414" }} className="App">
      <Menu />
      <BannerMain
        videoTitle = {dadosInicais.categorias[0].videos[0].titulo}
        url={dadosInicais.categorias[0].videos[0].url}
        videosDescription={"??????????????????"}
      />
      <Carousel
        ignoreFirstVideo
        category = {dadosInicais.categorias[0]}
      />
      <Carousel
        category = {dadosInicais.categorias[1]}
      />
      <Carousel
        category = {dadosInicais.categorias[2]}
      />
      <Carousel
        category = {dadosInicais.categorias[3]}
      />
      <Carousel
        category = {dadosInicais.categorias[4]}
      />
      <Carousel
        category = {dadosInicais.categorias[5]}
      />
      <Footer/>
    </div>
  );
}

export default App;
