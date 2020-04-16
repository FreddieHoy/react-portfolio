import {
  indentSizeLaptop,
  indentSizeMobile,
  laptopBreakPoint,
  mobileBreakPoint,
  tabletBreakPoint
} from 'config/spacing';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px ${indentSizeMobile}px 100px ${indentSizeMobile}px;

  @media (min-width: ${mobileBreakPoint}px) {
    padding: 0 0 140px 0;
    margin: 0 auto;
    width: 500px;
  }

  @media (min-width: ${tabletBreakPoint}px) {
    padding: ${indentSizeLaptop}px 0 100px 0;
    width: 660px;
  }

  @media (min-width: ${laptopBreakPoint}px) {
  }
`;
