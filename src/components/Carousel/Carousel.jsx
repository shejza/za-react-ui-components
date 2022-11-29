import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const Carousel = ({ slides, arrowIcons, arrowsColor, ...props }) => {
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
      return <EachSlide {...props} key={index} style={{ backgroundImage: item.eachSlide }}></EachSlide>;
    });

  const renderDots = () =>
    slides.map((silde, index) => {
      return (
        // check index
        <Dot {...props} className={isActive(index) + " dots"} key={index}>
          <button onClick={() => setActive(index)}>
            <span>&#9679;</span>
          </button>
        </Dot>
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
        <Arrows
          {...props}
          icon={arrowIcons}
          arrowsColor={arrowsColor}
          transform="rotate(180deg)"
          className="prev"
          onClick={() => prevOne()}
        ></Arrows>
        <Arrows
          {...props}
          icon={arrowIcons}
          arrowsColor={arrowsColor}
          className="next"
          onClick={() => nextOne()}
        ></Arrows>
      </>
    );
  };

  return (
    <SliderContainer {...props}>
      <Wrapper style={setSliderStyles()}>{renderSlides()}</Wrapper>
      {renderArrows()}
      <DotsContainer {...props}>{renderDots()}</DotsContainer>
      <TogglePlay {...props} onClick={toggleAutoPlay}>
        {renderPlayStop()}
      </TogglePlay>
    </SliderContainer>
  );
};

const SliderContainer = styled.section`
  ${({ sliderContainerWidth }) => sliderContainerWidth && `width:  ${sliderContainerWidth}`};
  ${({ sliderContainerHeight }) => sliderContainerHeight && `height:  ${sliderContainerHeight}`};
  ${({ sliderContainerOverflow }) => sliderContainerOverflow && `overflow:  ${sliderContainerOverflow}`};
  ${({ sliderContainerPosition }) => sliderContainerPosition && `position:  ${sliderContainerPosition}`};
`;

const Wrapper = styled.div`
  height: 100vh;
  transition: 0.5s all linear;
  will-change: transform;
`;

const DotsContainer = styled.ul`
  ${({ dotsContainerHeight }) => dotsContainerHeight && `height:  ${dotsContainerHeight}`};
  ${({ dotsContainerMargin }) => dotsContainerMargin && `margin:  ${dotsContainerMargin}`};
  ${({ dotsContainerPadding }) => dotsContainerPadding && `padding:  ${dotsContainerPadding}`};
  ${({ dotsContainerPosition }) => dotsContainerPosition && `position:  ${dotsContainerPosition}`};
  ${({ dotsContainerWidth }) => dotsContainerWidth && `width:  ${dotsContainerWidth}`};
  ${({ dotsContainerTextAlign }) => dotsContainerTextAlign && `text-align:  ${dotsContainerTextAlign}`};
  ${({ dotsContainerLeft }) => dotsContainerLeft && `left:  ${dotsContainerLeft}`};
  ${({ dotsContainerBottom }) => dotsContainerBottom && `bottom:  ${dotsContainerBottom}`};
  ${({ dotsContainerTransform }) => dotsContainerTransform && `transform:  ${dotsContainerTransform}`};
  ${({ dotsContainerZIndex }) => dotsContainerZIndex && `z-index:  ${dotsContainerZIndex}`};
  ${({ dotsContainerListStyleType }) =>
    dotsContainerListStyleType && `list-style-type:  ${dotsContainerListStyleType}`};
`;

const Dot = styled.li`
  ${({ dotDisplay }) => dotDisplay && `display:  ${dotDisplay}`};
  ${({ dotPadding }) => dotPadding && `padding:  ${dotPadding}`};
  &.active {
    button {
      ${({ dotActiveColor }) => dotActiveColor && `color:  ${dotActiveColor}`};
    }
  }

  button {
    ${({ dotColor }) => dotColor && `color:  ${dotColor}`};
    ${({ dotBackgroundColor }) => dotBackgroundColor && `background-color:  ${dotBackgroundColor}`};
    ${({ dotBorder }) => dotBorder && `border:  ${dotBorder}`};

    &:hover {
      ${({ dotHoverTextDecoration }) => dotHoverTextDecoration && `text-decoration:  ${dotHoverTextDecoration}`};
      ${({ dotHoverOpacity }) => dotHoverOpacity && `opacity:  ${dotHoverOpacity}`};
      ${({ dotHoverCursor }) => dotHoverCursor && `cursor:  ${dotHoverCursor}`};
    }
  }
`;

const TogglePlay = styled.button`
  ${({ togglePlayBackground }) => togglePlayBackground && `background:  ${togglePlayBackground}`};
  ${({ togglePlayBorder }) => togglePlayBorder && `border:  ${togglePlayBorder}`};
  ${({ togglePlayHeight }) => togglePlayHeight && `height:  ${togglePlayHeight}`};
  ${({ togglePlayPosition }) => togglePlayPosition && `position:  ${togglePlayPosition}`};
  ${({ togglePlayWidth }) => togglePlayWidth && `width:  ${togglePlayWidth}`};
  ${({ togglePlayRight }) => togglePlayRight && `right:  ${togglePlayRight}`};
  ${({ togglePlayBottom }) => togglePlayBottom && `bottom:  ${togglePlayBottom}`};
  ${({ togglePlayColor }) => togglePlayColor && `color:  ${togglePlayColor}`};
  ${({ togglePlayZIndex }) => togglePlayZIndex && `z-index:  ${togglePlayZIndex}`};

  &:hover {
    ${({ togglePlayTextDecoration }) => togglePlayTextDecoration && `text-decoration:  ${togglePlayTextDecoration}`};
    ${({ togglePlayOpacity }) => togglePlayOpacity && `opacity:  ${togglePlayOpacity}`};
    ${({ togglePlayCursor }) => togglePlayCursor && `cursor:  ${togglePlayCursor}`};
  }
`;

const EachSlide = styled.div`
  ${({ slideWidth }) => slideWidth && `width:  ${slideWidth}`};
  ${({ slideHeight }) => slideHeight && `height:  ${slideHeight}`};
  ${({ slideFloat }) => slideFloat && `float:  ${slideFloat}`};
  ${({ slideLineHeight }) => slideLineHeight && `line-height:  ${slideLineHeight}`};
  ${({ slideFontSize }) => slideFontSize && `font-size:  ${slideFontSize}`};
  ${({ slideTextAlign }) => slideTextAlign && `text-align:  ${slideTextAlign}`};
  ${({ slideBackgroundSize }) => slideBackgroundSize && ` background-size:  ${slideBackgroundSize}`};
  ${({ slideBackgroundPosition }) => slideBackgroundPosition && `background-position:  ${slideBackgroundPosition}`};
  ${({ slideBackgroundColor }) => slideBackgroundColor && `background-color:  ${slideBackgroundColor}`};
`;

const Arrows = styled(Icon)`
${({ arrowsPostion }) => arrowsPostion && `position:  ${arrowsPostion}`};
${({ arrowsTop }) => arrowsTop && `top:  ${arrowsTop}`};
${({ arrowsBackground }) => arrowsBackground && `background:  ${arrowsBackground}`};
${({ arrowsHeight }) => arrowsHeight && `height:  ${arrowsHeight}`};
${({ arrowsBorder }) => arrowsBorder && `border:  ${arrowsBorder}`};
${({ arrowsCursor }) => arrowsCursor && `cursor:  ${arrowsCursor}`};
${({ arrowsTransition }) => arrowsTransition && `transition:  ${arrowsTransition}`};
${({ arrowsOutline }) => arrowsOutline && `outline:  ${arrowsOutline}`};
${({ arrowsTransform }) => arrowsTransform && `transform:  ${arrowsTransform}`};
${({ arrowsColor }) => arrowsColor && `color:  ${arrowsColor}`};

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

Carousel.defaultProps = {
  sliderContainerWidth: "100vw",
  sliderContainerHeight: "100vh",
  sliderContainerOverflow: "hidden",
  sliderContainerPosition: "relative",

  slideWidth: "100vw",
  slideHeight: "100vh",
  slideFloat: "left",
  slideLineHeight: "100vh",
  slideFontSize: "40vh",
  slideTextAlign: "center",
  slideBackgroundSize: "cover",
  slideBackgroundPosition: "center center",
  slideBackgroundColor: "transparent",

  arrowIcons: "MdKeyboardArrowRight",
  arrowsColor: "white",
  arrowsPostion: "absolute",
  arrowsTop: "50%",
  arrowsBackground: "none",
  arrowsHeight: "60px",
  arrowsBorder: "0",
  arrowsCursor: "pointer",
  arrowsTransition: "ease 0.3s all",
  arrowsOutline: "none",

  dotsContainerHeight: "auto",
  dotsContainerMargin: "0",
  dotsContainerPadding: "0",
  dotsContainerPosition: "absolute",
  dotsContainerWidth: "auto",
  dotsContainerTextAlign: "center",
  dotsContainerLeft: "50%",
  dotsContainerBottom: "9px",
  dotsContainerTransform: "translateX(-50%)",
  dotsContainerZIndex: "10",
  dotsContainerListStyleType: "none",

  dotDisplay: "inline-block",
  dotPadding: "5px",
  dotActiveColor: "#00d8ff",
  dotColor: "#fff",
  dotBackgroundColor: "transparent",
  dotBorder: "none",
  dotHoverTextDecoration: "none",
  dotHoverOpacity: "0.7",
  dotHoverCursor: "pointer",

  togglePlayBackground: "transparent",
  togglePlayBorder: "none",
  togglePlayHeight: "auto",
  togglePlayPosition: "absolute",
  togglePlayWidth: "auto",
  togglePlayRight: "5%",
  togglePlayBottom: "9px",
  togglePlayColor: "#3d3d3d",
  togglePlayZIndex: "1000000",
  togglePlayTextDecoration: "none",
  togglePlayOpacity: "0.7",
  togglePlayCursor: "pointer",
};

export default Carousel;
