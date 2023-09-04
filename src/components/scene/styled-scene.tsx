import styled from "styled-components";

export const SceneBox = styled.div`
  border: solid;
  border-radius: 20px;
  margin: 10px;
  padding: 5px;
  text-align: center;
  background-color: #ffffff9b;

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

export const SceneBoxHighlighted = styled(SceneBox)`
  background-color: #ffc0cb;
`;
