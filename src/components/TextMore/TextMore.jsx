import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Text from "../Text/Text";

const TextMore = ({ description, maxWidth, onReadMore, color = "#e5957e" }) => {
  const [overflowActive, setOverflowActive] = useState(false);

  const isEllipsisActive = (e) => {
    return e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
  };

  const ref = useRef();
  useEffect(() => {
    setOverflowActive(isEllipsisActive(ref.current.children[0]));
  }, [isEllipsisActive]);
  const [isActive, setActive] = useState(false);
  const readMore = () => {
    if(onReadMore) {
      onReadMore();
    } else {
      setActive(!isActive);
    }
  };

 
  return (
    <DescriptionWrapper>
      <Wrapper className={!isActive && "not-expanded"} maxWidth={maxWidth} ref={ref}>
        <Description size="16px" color="secondary450" className={!isActive && "not-expanded"}>
          {description}
        </Description>
      </Wrapper>
      {overflowActive && <ButtonText color={color} onClick={readMore} className="read-more">Read more</ButtonText>}
    </DescriptionWrapper>
  );	
};

const ButtonText = styled.span`
  padding: 0;
  font-weight: 700;
  color: ${({ color }) => color};
  white-space: nowrap;
  align-self: end;
  line-height: 1.5;
  cursor: pointer;
  margin-left: -auto;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: end;
  .not-expanded {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
`;
const Description = styled(Text)`
  line-height: 24px;
  word-break: break-word;
  .not-expanded {
    word-break: break-word;
  }
`;

const Wrapper = styled.div`
width: ${({ maxWidth }) => maxWidth};


`;

TextMore.defaultProps = {
  maxWidth: "490px",
};
export default TextMore;
