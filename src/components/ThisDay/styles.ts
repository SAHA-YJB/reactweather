import styled from 'styled-components';

export const ThisDayWrapper = styled.div`
  width: 400px;
  min-height: 300px;
  padding: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media (max-width: 980px) {
    max-width: 350px;
    min-height: 250px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 65px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 96px;
      font-weight: 400;
      line-height: 86px;
      color: #4794ff;
    }
    h3 {
      font-size: 40px;
      font-weight: 300;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4px;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #939cb0;
`;
