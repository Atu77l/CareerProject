import React from "react";
import image1 from "../Image/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
import image2 from "../Image/christin-hume-mfB1B1s4sMc-unsplash.jpg";
import image3 from "../Image/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block"
              src={image1}
              alt="First slide"
              style={{ height: "500px", width: "1500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src={image2}
              alt="Second slide"
              style={{ height: "500px", width: "1500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src={image3}
              alt="Third slide"
              style={{ height: "500px", width: "1500px" }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev  "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          style={{ paddingBottom: "100px" }}
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="sr-only ">Previous</span>
        </a>
        <a
          className="carousel-control-next "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          style={{ paddingBottom: "100px" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
