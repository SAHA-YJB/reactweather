import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: fit-content;
  width: 90%;
  margin: 20px auto 0 auto;

  @media (max-width: 980px) {
    max-width: 800px;
    width: 90%;
  }
`;
