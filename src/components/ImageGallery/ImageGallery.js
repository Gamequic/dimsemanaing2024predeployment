import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageViewer = () => {
  const images = [
    {
      original: `${process.env.PUBLIC_URL}/CONREDES/Calendario.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/CONREDES/Calendario.jpg`,
    },
    {
      original: `${process.env.PUBLIC_URL}/CONREDES/Circulo de conferencias.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/CONREDES/Circulo de conferencias.jpg`,
    },
    {
      original: `${process.env.PUBLIC_URL}/CONREDES/Mini entrevista.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/CONREDES/Mini entrevista.jpg`,
    },{
        original: `${process.env.PUBLIC_URL}/CONREDES/Ponencias matutinas.jpg`,
        thumbnail: `${process.env.PUBLIC_URL}/CONREDES/Ponencias matutinas.jpg`,
      },
      {
        original: `${process.env.PUBLIC_URL}/CONREDES/Ponencias vespertinas.jpg`,
        thumbnail: `${process.env.PUBLIC_URL}/CONREDES/Ponencias vespertinas.jpg`,
      },
      {
        original: `${process.env.PUBLIC_URL}/CONREDES/Que sigue.jpg`,
        thumbnail: `${process.env.PUBLIC_URL}/CONREDES/Que sigue.jpg`,
      },
  ];

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default ImageViewer;
