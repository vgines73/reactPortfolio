import React from "react";
import { Col } from "../Components/Column/Col";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Header from "../Components/Header/Header";
import Wrapper from "../Components/Wrapper/Wrapper";
import Card from "../Components/Card/Card";
import projOneImage from "../Components/images/portfolio-images/thumbnails/superhero-showdown.png";
import projTwoImage from "../Components/images/portfolio-images/thumbnails/piece-of-art.png";
import pwdGenImage from "../Components/images/portfolio-images/thumbnails/password-generator.png";
import dayPlannerImage from '../Components/images/portfolio-images/thumbnails/day-planner.png';
import weatherDashImage from '../Components/images/portfolio-images/thumbnails/weather-dashboard.png';
import readMeImage from '../Components/images/portfolio-images/thumbnails/read-me-generator.png';
import tempEngineImage from '../Components/images/portfolio-images/thumbnails/template-engine-employee-summary.png';
import burgerImage from '../Components/images/portfolio-images/thumbnails/burger-app.png'


const Portfolio = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col size="md-12">
            <Header>My Portfolio</Header>
            <br />
            <Container>
              <Row>
                <Col size="md-4">
                  <Card
                    name="Comic Books"
                    title="Superhero Showdown"
                    image={projOneImage}
                    text="1 vs 1 Hero Battle"
                    repo="https://github.com/vgines73/avvb_project1"
                    link="https://vgines73.github.io/avvb_project1/"
                  ></Card>
                </Col>
                <br />
                <Col size="md-4">
                  <Card
                    name="nature cliffs"
                    title="Piece of Art"
                    image={projTwoImage}
                    text="Post your Artwork"
                    repo="https://github.com/vgines73/project_2"
                    link="https://ancient-waters-03417.herokuapp.com/"
                  ></Card>
                </Col>
                <Col size="md-4">
                  <Card
                    name="nature cliffs"
                    title="Project 2: Piece of Art"
                    image={projTwoImage}
                    text="Post your Artwork"
                    repo="https://github.com/vgines73/project_2"
                    link="https://ancient-waters-03417.herokuapp.com/"
                  ></Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col size="md-4">
                  <Card
                    name="password screen"
                    title="Password Generator"
                    image={pwdGenImage}
                    text="Generate a Password"
                    repo="https://github.com/vgines73/HW3_randomPasswordGenerator"
                    link="https://vgines73.github.io/HW3_randomPasswordGenerator"
                  ></Card>
                </Col>
                <Col size="md-4">
                  <Card
                    name="day planner"
                    title="Day Planner"
                    image={dayPlannerImage}
                    text="Day Planner Saver"
                    repo="https://github.com/vgines73/HW5_dayPlannerOhYeah"
                    link="https://vgines73.github.io/HW5_dayPlannerOhYeah/"
                  ></Card>
                </Col>
                <Col size="md-4">
                  <Card
                    name="weather dashboard"
                    title="Weather Dashboard"
                    image={weatherDashImage}
                    text="Check the Weather"
                    repo="https://github.com/vgines73/HW6_WeatherDashboardOhYeah"
                    link="https://vgines73.github.io/HW6_WeatherDashboardOhYeah/"
                  ></Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col size="md-4">
                  <Card
                    name="read me template"
                    title="Read Me Generator"
                    image={readMeImage}
                    text="Generate a README Template"
                    repo="https://github.com/vgines73/HW9_readMeGeneratorOhYeah"
                    link="https://drive.google.com/file/d/1KwwBUmiDA78H_8zWUaEKcML3ItNhLc1H/view"
                  ></Card>
                </Col>
                <Col size="md-4">
                  <Card
                    name="template engine employee"
                    title="Template Engine Employee"
                    image={tempEngineImage}
                    text="Create Employee Info Cards"
                    repo="https://github.com/vgines73/templateEngineEmployeeSummaryOhYeah"
                    link="https://drive.google.com/file/d/1h8H4_oLBu2qKINx63J8RZ3qfI_kx502b/view"
                  ></Card>
                </Col>
                <Col size="md-4">
                  <Card
                    name="burger"
                    title="Burger App"
                    image={burgerImage}
                    text="CRUD Functionality"
                    repo="https://github.com/vgines73/burger"
                    link="https://infinite-bastion-62702.herokuapp.com/"
                  ></Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;
