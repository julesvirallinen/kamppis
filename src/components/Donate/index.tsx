import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 8rem;
  padding: 3rem;
`;

const Title = styled.div`
  color: black;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  width: 40rem;
`;

export const Donate: React.FC = () => {
  return (
    <Container>
      <Title>Lahjoita</Title>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id blanditiis
        quas minima quidem eum ea rerum iste est, cumque quis officiis in ipsa
        deserunt facere laudantium rem, maxime aliquid ullam.
      </Text>
    </Container>
  );
};
