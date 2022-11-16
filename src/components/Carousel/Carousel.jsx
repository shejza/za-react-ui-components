import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";



const Carousel = ({slides, ...props }) => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(0);
  const max = slides.length;

  const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1);

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  });

  const toggleAutoPlay = () => setAutoplay(!autoplay);

  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = (value) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
    slides.map((item, index) => {
      return <EachSlide key={index} style={{ backgroundImage: item.eachSlide }}></EachSlide>;
    });

  const renderDots = () =>
    slides.map((silde, index) => {
      return (
        // check index
        <li className={isActive(index) + " dots"} key={index}>
          <button onClick={() => setActive(index)}>
            <span>&#9679;</span>
          </button>
        </li>
      );
    });

  const renderPlayStop = () => {
    return (
      <>
        {autoplay ? (
          <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        ) : (
          <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        )}
      </>
    );
  };

  const renderArrows = () => {
    return (
      <>
        <Arrows className="prev" onClick={() => prevOne()}>
          <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Arrows>
        <Arrows className="next" onClick={() => nextOne()}>
          <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Arrows>
      </>
    );
  };

  return (
    <Slider>
      <Wrapper style={setSliderStyles()}>{renderSlides()}</Wrapper>
      {renderArrows()}
      <DotsContainer>{renderDots()}</DotsContainer>
      <TogglePlay onClick={toggleAutoPlay}>{renderPlayStop()}</TogglePlay>
    </Slider>
  );
};

const Slider = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100vh;
  transition: 0.5s all linear;
  will-change: transform;
`;

const DotsContainer = styled.ul`
  height: auto;
  margin: 0;
  padding: 0;
  position: absolute;
  width: auto;
  text-align: center;
  left: 50%;
  bottom: 9px;
  transform: translateX(-50%);
  z-index: 10;
  list-style-type: none;

  li {
    display: inline-block;
    padding: 5px;

    &.active {
      button {
        color: #00d8ff;
      }
    }

    button {
      color: #fff;
      background-color: transparent;
      border: none;

      &:hover {
        text-decoration: none;
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
`;

const TogglePlay = styled.button`
  background: transparent;
  border: none;
  height: auto;
  position: absolute;
  width: auto;
  right: 5%;
  bottom: 9px;
  color: #3d3d3d;
  z-index: 1000000;

  &:hover {
    text-decoration: none;
    opacity: 0.7;
    cursor: pointer;
  }
`;

const EachSlide = styled.div`
  width: 100vw;
  height: 100vh;
  float: left;
  line-height: 100vh;
  font-size: 40vh;
  text-align: center;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
`;

const Arrows = styled.button`
  position: absolute;
  top: 50%;
  background: none;
  height: 60px;
  border: 0;
  cursor: pointer;
  transition: ease 0.3s all;
  outline: none;

  &.prev {
    left: 0;

    &:hover {
      opacity: 0.7;
      left: -10px;
    }
  }

  &.next {
    right: 0;

    &:hover {
      right: -10px;
      opacity: 0.7;
    }
  }
`;
Carousel.defaultProps = {};

export default Carousel;
