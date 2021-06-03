import styled from "styled-components";

const Rect = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: ${(props) => props.height}rem;
  background-color: ${(props) => props.color || `#b4b4b4`};
  border-radius: 4px 4px 0 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 20rem;
  width: 500px;
`;

const PlayButton = styled.button`
  padding: 1rem;
  border-radius: 4px;
  border: none;
`;

export { Rect, Container, PlayButton };
