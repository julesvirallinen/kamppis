import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40rem;
  background-color: maroon;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("titta.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.div`
  color: white;
  font-size: 5rem;
`;

export const Hero: React.FC = () => {
  return (
    <Container>
      <Title>TITTA PÅ TITTA</Title>
    </Container>
  );
};
