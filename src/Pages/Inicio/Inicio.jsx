import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

function Inicio() {
  return (
    <MainContainer>
      <HeroSection />
      <FeaturesSection />
    </MainContainer>
  );
}

export default Inicio;
