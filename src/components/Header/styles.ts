import styled from "styled-components";

import cover from "../../assets/cover.svg";

export const HeaderContainer = styled.header`
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  height: 18.5rem;
  justify-content: center;
  width: 100%;

  a {
    margin-top: 4rem;
  }
`;
