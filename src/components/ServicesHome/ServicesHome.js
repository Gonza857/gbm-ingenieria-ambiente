import styled from "styled-components";
import Service from "../Service/Service";
import MainButton from "../Buttons/MainButton";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: "/images/icons/1.png",
    title: "Asesoramiento de proyecto",
  },
  {
    icon: "/images/icons/3.png",
    title: "Proyectos de loteo y urbanización",
  },
  {
    icon: "/images/icons/5.png",
    title: "Estudio de impacto ambiental",
  },
];

const ServicesHome = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Heading>Servicios</Heading>
      <Services>
        {services.map((service) => (
          <Service icon={service.icon} title={service.title} variant="button" />
        ))}
      </Services>
      <ButtonContainer>
        <MainButton size="large" fn={() => navigate("/servicios")}>
          Ver todos
        </MainButton>
      </ButtonContainer>
    </section>
  );
};

const Heading = styled.h2`
  text-align: center;
  color: var(--green);
  font-size: 36px;
  margin-bottom: 2.8rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    height: 5px;
    width: 32vw;
    background-color: var(--green);
  }

  @media (max-width: 650px) {
    &::after {
      display: none;
    }
  }
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin-top: 2rem;
`;

export default ServicesHome;
