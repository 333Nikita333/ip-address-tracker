import styled from 'styled-components';

export const DataInfo = styled.div`
  position: relative;
  z-index: 1000;
  padding: 25px;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;

  border-radius: 15px;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    min-height: 100px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoItem = styled.li`
  @media screen and (min-width: 768px) {
    padding-left: 15px;

    text-align: initial;
    border-left: 1px solid #969696;

    &:first-child {
      border-left: none;
      padding-left: 0;
    }
  }

  & p {
    margin-bottom: 5px;

    font-size: 10px;
    letter-spacing: 2px;
    font-weight: 700;
    color: #969696;
    text-transform: uppercase;
  }

  & span {
    font-size: 18px;
    font-weight: 700;
    color: #2b2b2b;
  }
`;
