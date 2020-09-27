import styled from "styled-components";
import { DanMurphiesLink } from "../../common/ThirdPartyLink/DanMurphiesLink";
import { WikipediaLink } from "../../common/ThirdPartyLink/WikipediaLink";

export const Container = styled.div`
  flex-flow: column nowrap;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: white;

  &.bigBoyCard-enter {
    transform: translateY(100%);
  }
  &.bigBoyCard-enter-active {
    transform: translateY(0%);
    transition: transform 500ms;
  }

  &.bigBoyCard-exit {
    transform: translateY(0%);
  }
  &.bigBoyCard-exit-active {
    transform: translateY(100%);
    transition: transform 500ms;
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 0;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  background-color: #5ae8dc;
  flex: 0 0 33%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
`;

export const Image = styled.img`
  object-fit: contain;
  position: relative;
  top: 10px;
  transform: rotate(5deg);
`;

export const TextContainer = styled.div`
  overflow-y: scroll;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 24px;
  line-height: 24px;
  margin: 24px 0 0;
`;

export const Description = styled.span`
  font-size: 16px;
  margin: 8px 0 0;
`;

export const StyledWikipediaLink = styled(WikipediaLink)`
  font-size: 14px;
  font-weight: bold;
  margin: 24px 0 0;
  padding: 4px 24px;
  width: auto;
`;

export const StyledDanMurphiesLink = styled(DanMurphiesLink)`
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  margin: 12px 0 0;
  padding: 4px 24px;
  width: auto;
`;
