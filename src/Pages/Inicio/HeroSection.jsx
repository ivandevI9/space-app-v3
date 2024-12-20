import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/GlobalContext";
import { IoIosInformationCircle } from "react-icons/io";

// Sección principal del héroe con imagen de fondo y texto centrado
const HeroSectionStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 20px 20px 60px 20px;
  background-color: #282c34;
  color: white;
  text-align: center;
  background-image: ${({ Image }) =>
    Image ? `url(${Image})` : "none"}; // Condicional para la imagen de fondo
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 768px) {
    // Cambia a móviles
    justify-content: flex-start; // Alinea el contenido hacia la parte superior en móviles
  }
`;

// Overlay oscuro para mejorar la visibilidad del texto sobre la imagen
const OverlayStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.589);
  z-index: 1;
`;

// Título principal del héroe
const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  z-index: 1; // Asegura que esté por encima del overlay

  @media (max-width: 768px) {
    // Cambia a móviles
    font-size: 8vw;
  }
`;

// Subtítulo del héroe
const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  padding: 0 50px;
  z-index: 2; // Asegura que el subtítulo esté por encima del overlay
  @media (max-width: 768px) {
    padding: 0;
    font-size: 4vw;
  }
`;

// Botón de llamada a la acción
const CTAButton = styled.a`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #0a6ad8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  z-index: 2;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    // Cambia a móviles
    font-size: 3vw;
  }
`;

// Sección de información con posición absoluta para superponerse sobre el héroe
const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 120px;
  left: 10px;
  z-index: 1;

  @media (max-width: 768px) {
    top: auto;
    left: 5px;
    bottom: 10px;
  }
`;

// Imagen o texto para el título en la sección de información
const TitleImage = styled.p`
  font-size: 15px;

  @media (max-width: 768px) {
    // Cambia a móviles
    font-size: 3vw;
  }
`;

// Tooltip con información adicional, visible cuando se activa
const Tooltip = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px;
  top: 30px;
  left: 10px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  pointer-events: none;
  width: 50vw;
  height: auto;
  font-size: 13px;

  @media (max-width: 768px) {
    top: auto;
    bottom: 20px;
    width: 90vw;
    z-index: 1001;
    font-size: 2.5vw;
  }
`;

// Icono de información que cambia de color según estado activo
const InfoIcon = styled(IoIosInformationCircle)`
  color: ${({ isActive }) => (isActive ? "black" : "white")};
  transition: color 0.2s ease;
  width: 20px;
  height: auto;
`;

// Sección principal de la información con padding dinámico para pantallas móviles
const InfoMainSection = styled.section`
  z-index: 100;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    padding: 20vh 1vw 10vh 1vw; // Padding relativo al tamaño de la pantalla
  }
`;

// Componente HeroSection
function HeroSection() {
  // Obtener la imagen diaria del contexto global
  const { dailyImage } = useGlobalContext();
  // Estado para controlar la visibilidad del tooltip
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <HeroSectionStyled Image={dailyImage.url}>
      {" "}
      {/* Estilo del componente Hero usando la imagen diaria */}
      <OverlayStyled /> {/* Overlay para dar efecto visual */}
      <InfoSection
        onMouseEnter={() => setTooltipVisible(true)} // Muestra el tooltip al pasar el mouse
        onMouseLeave={() => setTooltipVisible(false)} // Oculta el tooltip al salir el mouse
      >
        <InfoIcon isActive={tooltipVisible} size={24} />{" "}
        {/* Icono que cambia de estado según la visibilidad del tooltip */}
        <TitleImage>
          {dailyImage.title} {/* Muestra el título de la imagen diaria */}
        </TitleImage>
        <Tooltip visible={tooltipVisible}>
          {" "}
          {/* Tooltip que muestra la explicación de la imagen */}
          <p>{dailyImage.explanation}</p>
        </Tooltip>
      </InfoSection>
      <InfoMainSection>
        <HeroTitle>Explora el Universo</HeroTitle>{" "}
        {/* Título principal de la sección */}
        <HeroSubtitle>
          Descubre los misterios del espacio con nosotros. Sumérgete en un viaje
          cósmico donde cada estrella, planeta y galaxia nos revela secretos
          fascinantes del universo.
        </HeroSubtitle>{" "}
        {/* Subtítulo que invita a la exploración */}
        <CTAButton href="#caracteristicas">Comienza Ahora</CTAButton>{" "}
        {/* Botón de llamada a la acción */}
      </InfoMainSection>
    </HeroSectionStyled>
  );
}

// Exportar el componente HeroSection
export default HeroSection;
