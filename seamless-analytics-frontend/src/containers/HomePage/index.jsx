import React from "react";
import Graph from "../../components/Graph";
import Restaurants from '../../components/Restaurants';
import { Container } from "semantic-ui-react";

const HomePage = () => (
  // <div className="home-container">
  <Container>
    <Graph />
    <Restaurants />
  </Container>
  // </div>
);

export default HomePage;
