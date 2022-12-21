import styled from "styled-components";

export const PostContainer = styled.main`
  padding: 0;
  margin: 0 auto;
  margin-bottom: 14.625rem;
  margin-top: -5rem;
  max-width: 54rem;
  width: 100%;

  @media (max-width: 864px) {
    padding: 0 1.5rem;
  }
`;

export const PostInfo = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 10.5rem;
  padding: 2rem;
  width: 100%;

  h2 {
    color: ${(props) => props.theme["base-title"]};
    font-style: normal;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.938rem;
    margin-bottom: 0.5rem;
  }
`;

export const PostNavigation = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  width: 100%;

  a {
    align-items: center;
    color: ${(props) => props.theme.blue};
    display: flex;
    font-size: 0.75rem;
    font-weight: 700;
    gap: 0.5rem;
    line-height: 1.188rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: border-bottom 0.1s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const Info = styled.div`
  align-items: center;
  color: ${(props) => props.theme["base-span"]};
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 0px;
  width: 100%;

  span,
  time {
    align-items: center;
    color: ${(props) => props.theme["base-span"]};
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    padding: 0px;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export const PostContent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  width: 100%;

  a {
    color: ${(props) => props.theme.blue};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: border-bottom 0.1s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.625rem;
  }
`;

export const PostContentCode = styled.div`
  align-items: center;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 2px;
  display: flex;
  gap: 0.5rem;
  height: 6.875rem;
  padding: 1rem;
  width: 100%;
`;
