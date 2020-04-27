import { fadeIn } from 'config/keyframes';
import {
  indentSizeLaptop,
  indentSizeMobile,
  ipadProHeightBreakPoint,
  mobileBreakPoint,
  tabletBreakPoint
} from 'config/spacing';
import styled from 'styled-components';

export const Container = styled.div`
  animation: ${fadeIn} 1s ease;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 ${indentSizeMobile}px 100px ${indentSizeMobile}px;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 0 0 140px 0;
    margin: 0 auto;
    width: 500px;
    justify-content: space-between;
  }

  @media (min-width: ${tabletBreakPoint}px) {
    padding: ${indentSizeLaptop}px 0 100px 0;
    width: 660px;
  }

  @media (min-height: ${ipadProHeightBreakPoint}px) {
    padding: 150px 0 100px 0;
  }
`;
