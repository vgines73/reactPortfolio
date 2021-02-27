import React from "react";
import bridgeImage from "../images/contact-images/bridge.jpg";
import basketballImage from "../images/contact-images/bridge.jpg";
import snowboardingImage from "../images/contact-images/snowboarding.jpg";

const styles = {
  slidePicStyles: {
    height: "400px",
    width: "600px",
  },
};

const Carousel = () => {
  return (
    <nav
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <section class="carousel-inner">
        <figure class="carousel-item active">
          <img
            src={bridgeImage}
            class="d-block w-100"
            style={styles.slidePicStyles}
            alt="japanese garden with bridge"
          />
          <figcaption class="carousel-caption d-none d-md-block">
            <h5>Attention to detail</h5>
          </figcaption>
        </figure>
        <figure class="carousel-item">
          <img
            src={snowboardingImage}
            class="d-block w-100"
            style={styles.slidePicStyles}
            alt="person snowboarding"
          />
          <figcaption class="carousel-caption d-none d-md-block">
            <h5>Carving My Path to Success</h5>
          </figcaption>
        </figure>
        <figure class="carousel-item">
          <img
            src={basketballImage}
            class="d-block w-100"
            style={styles.slidePicStyles}
            alt="person posing with basketball after sunset"
          />
          <figcaption class="carousel-caption d-none d-md-block">
            <h5>Team Player and Dedication</h5>
          </figcaption>
        </figure>
      </section>
      <nav>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </nav>
    </nav>
  );
};

export default Carousel;
