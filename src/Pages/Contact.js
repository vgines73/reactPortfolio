import React from "react";
import { Col } from "../Components/Column/Col";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Header from "../Components/Header/Header";
import SearchForm from "../Components/SearchForm/SearchForm";
import Wrapper from "../Components/Wrapper/Wrapper";
import Carousel from "../Components/Carousel/Carousel";
import musicImage from "../Components/images/contact-images/music.jpg";
import codingImage from "../Components/images/contact-images/coding.jpg";

const styles = {
  imageStyle: {
    paddingTop: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileStyle: {
    fontSize: "40px",
  },
  numberStyle: {
    fontSize: "16px",
    backgroundColor: "transparent",
  },
  envelopeStyle: {
    fontSize: "40px",
    paddingTop: "30px",
  },
  mailStyle: {
    fontSize: "16px",
    backgroundColor: "transparent",
  },
  pdfStyle: {
    fontSize: "40px",
    paddingTop: "30px",
  },
  resumeStyle: {
    fontSize: "16px",
    backgroundColor: "transparent",
  },
  skullStyle: {
    paddingTop: "45px",
  },
  animeStyle: {
    paddingTop: "45px",
  },
  musicCodingStyles: {
    height: "200px",
    width: "600px",
  },
  textStyle: {
    color: "whitesmoke",
    fontFamily: "Francois One, sans-serif",
  },
};

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col size="md-6">
            <Row>
              <Col size="md-7">
                <Header>Contact Me</Header>
                <SearchForm></SearchForm>
              </Col>
              <Col size="md-4">
                <Container>
                  <br />
                  <figure>
                    <i
                      className="fas fa-mobile-alt text-center"
                      // style={styles.imageStyle}
                      style={styles.mobileStyle}
                      alt="phone"
                    ></i>
                    <br />
                    <a href="tel:4157062475" style={styles.number}>
                      415-706-2475
                    </a>
                  </figure>
                  <figure>
                    <i
                      className="fas fa-envelope text-center"
                      // style={styles.imageStyle}
                      style={styles.envelopeStyle}
                      alt="envelope"
                    ></i>
                    <br />
                    <a
                      href="mailto:vgines73@gmail.com"
                      style={styles.mailStyle}
                    >
                      vgines73@gmail.com
                    </a>
                  </figure>
                  <figure>
                    <i
                      className="fas fa-file-pdf text-center"
                      // style={styles.imageStyle}
                      style={styles.pdfStyle}
                      alt="pdf file"
                    ></i>
                    <br />
                    <a
                      href="../Components/resume/vincentGinesResume.pdf"
                      style={styles.resumeStyle}
                      target="blank"
                    >
                      My Resume
                    </a>
                  </figure>
                </Container>
              </Col>
            </Row>
          </Col>
          <Col size="md-6">
            <br />
            <Carousel />
          </Col>
        </Row>
        <br />
        <div>
          <Row>
            <Col size="md-4">
              <figure className="horror-anime" style={styles.skullStyle}>
                <img
                  src="https://i.pinimg.com/736x/1a/a7/1e/1aa71e4fe64928b08a4f4526befe55a8--alex-pardee-horror-art.jpg"
                  alt="skull with horror villians"
                  className="img-thumbnail"
                />
                <header>
                  <h2
                    className="text-center contact-text"
                    style={styles.textStyle}
                  >
                    Horror Art
                  </h2>
                </header>
              </figure>
            </Col>
            <Col size="md-4">
              <Row>
                <figure>
                  <img
                    src={musicImage}
                    alt="d.j. table mixer"
                    className="img-thumbnail music-coding"
                    style={styles.musicCodingStyles}
                  />
                  <header>
                    <h2
                      className="text-center contact-text"
                      style={styles.textStyle}
                    >
                      Music
                    </h2>
                  </header>
                  <img
                    src={codingImage}
                    alt="numbers water-fist fire-fist"
                    className="img-thumbnail music-coding"
                    style={styles.musicCodingStyles}
                  />
                  <header>
                    <h2
                      className="text-center contact-text"
                      style={styles.textStyle}
                    >
                      Coding
                    </h2>
                  </header>
                </figure>
              </Row>
            </Col>
            <Col size="md-4">
              <figure class="horror-anime" style={styles.animeStyle}>
                <img
                  src="https://pbs.twimg.com/media/ClhNJ72UoAE_aVZ.jpg:large"
                  alt="sketch of demonic anime character"
                  class="img-thumbnail"
                />
                <header>
                  <h2 class="text-center contact-text" style={styles.textStyle}>
                    Anime Art
                  </h2>
                </header>
              </figure>
            </Col>
          </Row>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Contact;
