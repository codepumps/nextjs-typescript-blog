import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  &:last-child {
    margin-bottom: 0;
  }

  > h1 {
    > a {
      color: black;
    }
  }
`;
export const Date = styled.span`
  color: #fff;
  padding: 7px 12px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-size: 12px;
  width: max-content;
  background-color: black;
`;
