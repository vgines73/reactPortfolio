import React from "react";
import { Col } from "../Components/Column/Col";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Header from "../Components/Header/Header";
import Wrapper from "../Components/Wrapper/Wrapper";
import Card from "../Components/Card/Card";
import projOneImage from "../Components/images/portfolio-images/thumbnails/superhero-showdown.png";
import projTwoImage from "../Components/images/portfolio-images/thumbnails/piece-of-art.png";
import myImage from "../Components/images/portfolio-images/thumbnails/image1.jpeg";
import materializePortImage from "../Components/images/portfolio-images/thumbnails/materialize-portfolio.png";
import pwdGenImage from "../Components/images/portfolio-images/thumbnails/random-password-generator.png";
import dayPlannerImage from "../Components/images/portfolio-images/thumbnails/day-planner.png";
import weatherDashImage from "../Components/images/portfolio-images/thumbnails/weather-dashboard.png";
import employeeDirImage from "../Components/images/portfolio-images/thumbnails/employee-directory.png";
import readMeImage from "../Components/images/portfolio-images/thumbnails/read-me-generator.png";
import tempEngineImage from "../Components/images/portfolio-images/thumbnails/template-engine-employee-summary.png";
import burgerImage from "../Components/images/portfolio-images/thumbnails/burger-app.png";
import fitnessTrackerImage from "../Components/images/portfolio-images/thumbnails/workout-tracker.png";

const Portfolio = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col size="md-12">
            <Header>My Portfolio</Header>
            <br />
            <Row>
              <Col size="md-3">
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
              <Col size="md-3">
                <Card
                  name="nature cliffs"
                  title="Piece of Art"
                  image={projTwoImage}
                  text="Post your Artwork"
                  repo="https://github.com/vgines73/project_2"
                  link="https://ancient-waters-03417.herokuapp.com/"
                ></Card>
              </Col>
              <Col size="md-3">
                <Card
                  name="project 3"
                  title="Project 3 TBD"
                  image={myImage}
                  text="placeholder"
                  repo="#"
                  link="#"
                ></Card>
              </Col>
              <Col size="md-3">
                <Card
                  name="materialize portfolio"
                  title="Materialize Portfolio"
                  image={materializePortImage}
                  text="Portfolio using Materialize"
                  repo="https://github.com/vgines73/materializePortfolio"
                  link="https://vgines73.github.io/materializePortfolio/"
                ></Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col size="md-3">
                <Card
                  name="password screen"
                  title="Password Generator"
                  image={pwdGenImage}
                  text="Generate a Password"
                  repo="https://github.com/vgines73/HW3_randomPasswordGenerator"
                  link="https://vgines73.github.io/HW3_randomPasswordGenerator"
                ></Card>
              </Col>
              <Col size="md-3">
                <Card
                  name="day planner"
                  title="Day Planner"
                  image={dayPlannerImage}
                  text="Day Planner Saver"
                  repo="https://github.com/vgines73/HW5_dayPlannerOhYeah"
                  link="https://vgines73.github.io/HW5_dayPlannerOhYeah/"
                ></Card>
              </Col>
              <Col size="md-3">
                <Card
                  name="weather dashboard"
                  title="Weather Dashboard"
                  image={weatherDashImage}
                  text="Check the Weather"
                  repo="https://github.com/vgines73/HW6_WeatherDashboardOhYeah"
                  link="https://vgines73.github.io/HW6_WeatherDashboardOhYeah/"
                ></Card>
              </Col>
              <Col size="md-3">
                <Card
                  name="employee directory"
                  title="Employee Directory"
                  image={employeeDirImage}
                  text="React Search Employee Directory"
                  repo="https://github.com/vgines73/employeeDirectory"
                  link="https://employee-directory-oh-yeah.herokuapp.com/"
                ></Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col size="md-3">
                <Card
                  name="read me template"
                  title="Read Me Generator"
                  image={readMeImage}
                  text="Generate a README Template"
                  repo="https://github.com/vgines73/HW9_readMeGeneratorOhYeah"
                  link="https://drive.google.com/file/d/1KwwBUmiDA78H_8zWUaEKcML3ItNhLc1H/view"
                ></Card>
              </Col>
              <Col size="md-3">
                <Card
                  name="template engine employee summy"
                  title="Template Engine"
                  image={tempEngineImage}
                  text="Create Employee Info Cards"
                  repo="https://github.com/vgines73/templateEngineEmployeeSummaryOhYeah"
                  link="https://drive.google.com/file/d/1h8H4_oLBu2qKINx63J8RZ3qfI_kx502b/view"
                ></Card>
              </Col>
              <Col size="md-3">
                <Card
                  name="burger"
                  title="Burger App"
                  image={burgerImage}
                  text="CRUD Functionality"
                  repo="https://github.com/vgines73/burger"
                  link="https://infinite-bastion-62702.herokuapp.com/"
                ></Card>
              </Col>
              <Col size="md-3">
                <Card
                  name="workout tracker"
                  title="Fitness Tracker"
                  image={fitnessTrackerImage}
                  text="Workout Storing App"
                  repo="https://github.com/vgines73/workoutTrackerOhYeah"
                  link="https://mysterious-wildwood-43781.herokuapp.com/"
                ></Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;
