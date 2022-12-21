import styled from "styled-components";

export const PostsContainer = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: 100%;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
