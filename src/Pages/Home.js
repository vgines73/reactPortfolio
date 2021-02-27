import React from "react";
import { Col } from "../Components/Column/Col";
import { Container } from "../Components/Container/Container";
import { Row } from "../Components/Row/Row";
import Wrapper from "../Components/Wrapper/Wrapper";
import wrapperStyle from '../Components/Wrapper/WrapperStyles'
import imageOne from "../Components/images/home-images/image1.jpeg";
import imageTwo from "../Components/images/home-images/image2.jpg";
import imageThree from "../Components/images/home-images/image3.jpeg";
import imageFour from "../Components/images/home-images/image4.jpg";
import Header from "../Components/Header/Header";

const styles = {
  skill90: {
    width: "90%",
  },
  skill80: {
    width: "80%",
  },
};
const Home = () => {
  return (
    <Wrapper style={wrapperStyle.pads}>
      <Container fluid>
        <Row>
          <Col size="md-8">
            <Row>
              <Col size="md-4">
                <Header>
                  About Me
                </Header>
                <div>
                  <img
                    src={imageOne}
                    alt="Vince wearing glasses"
                    className="img-thumbnail"
                  />
                </div>
                <nav className="float-right">
                  <a href="https://twitter.com/vincent_gines">
                    <i
                      className="fa fa-twitter"
                      aria-hidden="true"
                      target="blank"
                    ></i>
                  </a>
                  <a href="https://www.instagram.com/ichi_niji/">
                    <i
                      className="fab fa-instagram-square"
                      aria-hidden="true"
                      target="blank"
                    ></i>
                  </a>
                  <a href="https://www.facebook.com/vincent.gines.7">
                    <i
                      className="fab fa-facebook"
                      aria-hidden="true"
                      target="blank"
                    ></i>
                  </a>
                  <a href="https://github.com/vgines73">
                    <i
                      className="fab fa-github-square"
                      aria-hidden="true"
                      target="blank"
                    ></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vincent-gines-oh-yeah"
                    aria-hidden="true"
                    target="blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </nav>
              </Col>
              <Col size="md-8">
                <br />
                <p>
                  My name is Vincent Gines. Born and raised in the hood of
                  Stockton, CA. Living in Stockton was difficult. Basically, I
                  had to bust my ass in school to get out. In my hood, there
                  were many obstacles that can deter you from acheiving your
                  goals. I was fortunate to have a family who cared about me to
                  help me focus on what's really important; an Education. After
                  graduating from High School I attended college at UC
                  Riverside. I thought to myself, I'm finally out of the hood
                  and can make something out of myself. Unfortunately, without
                  my family by my side, I was on my own. Finding myself was a
                  struggle. Expectations were high, but I was lost. I wasn't
                  exposed enough to really be on my own growing up, so you can
                  say, "I fell through the cracks," and never finished.
                </p>
                <p>
                  I worked from job to job, trying to survive, working my ass
                  off to prove to myself and everyone I could do make it on my
                  own. In a year, I became a Store Manager at Vans and did it
                  for five years. To be honest, I was making it work, and I was
                  happy with what I was doing. My goal was to move into
                  Corporate, and was in the process of doing so, but then came
                  the unthinkable; Recession, Budget cuts, and lay-offs. I was
                  one of the many and lost my job. I worked for another
                  companies but didn't see myself going where with it. I thought
                  it was it, that is until, I found my wife.
                </p>
                <p>
                  My wife and I moved out of SoCal after we got married, and
                  moved closer to the Bay Area where her family currently lives.
                  A few years later, we had two boys, both who are on the
                  spectrum. My wife worked, while I stayed back, caring for our
                  children, taking them to their services to help them cope, and
                  be able to live this so-called "normal-life". My kids have
                  showed me that life isn't so easy for everyone. That some of
                  us need to work extra hard just to keep up. Watching them
                  grow, how hard they have been working towards that goal,
                  living a "normal-life", I realized I should also get myself in
                  order, to make something of myself, which is why I'm here
                  taking this course.
                </p>
              </Col>
            </Row>
          </Col>
          <Col size="md-4">
            <Container>
              <div>
                <h2 className="text-center">My Family</h2>
              </div>
              <Col size="md-12">
                <img
                  src={imageTwo}
                  alt="Vince and wife outside of theatre"
                  className="img-thumbnail"
                />
                <figcaption>
                  <p className="text-center">
                    My Wife and I going to see Hamilton
                  </p>
                </figcaption>
              </Col>
              <Row>
                <Col size="md-6">
                  <img
                    id="son"
                    src={imageThree}
                    alt="Vince and son smiling"
                    class="img-thumbnail float-right"
                  />
                  <figcaption>
                    <p class="text-center">
                      My first born and I waiting in line for It's a Small World
                      at Disneyland
                    </p>
                  </figcaption>
                </Col>
                <Col size="md-6">
                  <img
                    src={imageFour}
                    alt="Vince and other son smiling"
                    class="img-thumbnail"
                  />
                  <figcaption>
                    <p class="text-center">
                      My youngest and I riding Alice in Wonderland at Disneyland
                    </p>
                  </figcaption>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        {/* Hobbies and Interests */}
        <Row>
          <Col size="md-4">
            <header>
              <h2 className="text-center">Hobbies and Interests</h2>
            </header>
            <p>
              Besides being a sports fanatic and active in sports, I enjoy
              watching anime and horror movies, hanging out with my children,
              listening to all types of music, cooking for my family, taking
              trips to Disneyland and Comic-Con, and drawing characters for my
              children. I also enjoy coding, building apps, problem-solving, and
              always looking to better myself.
            </p>
          </Col>
          {/* Skills Section */}
          <Col size="md-4">
            <header>
              <h2 className="text-center">Skills</h2>
            </header>
            <article>
              <p>Front End - React: 90%</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={styles.skill90}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br />
            </article>
            <article>
              <p>Javascript: 80%</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={styles.skill80}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br />
            </article>
            <article>
              <p>Back End - Mongoose: 90%</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={styles.skill90}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br />
            </article>
            <article>
              <p>Frameworks - Bootstrap/Materialize: 80%</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={styles.skill80}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br />
            </article>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Home;
