import styled from "styled-components";

export const ProfileContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  padding: 2rem 2rem 2rem 2.5rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 13.25rem;
  }
`;

export const Avatar = styled.div`
  border-radius: 8px;
  height: 9.25rem;
  width: 9.25rem;

  img {
    border-radius: 8px;
    height: 9.25rem;
    width: 9.25rem;
  }
`;

export const ProfileContent = styled.div`
  text-align: center;
  width: 100%;

  div.profile-header {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    a {
      align-items: center;
      color: ${(props) => props.theme.blue};
      display: flex;
      font-size: 0.75rem;
      font-weight: 700;
      gap: 0.5rem;
      line-height: 1.188rem;
      padding: 0px;
      text-decoration: none;
      text-transform: uppercase;
      transition: border-bottom 0.1s;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h2 {
    color: ${(props) => props.theme["base-title"]};
    font-style: normal;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.938rem;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-style: normal;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const ProfileInfo = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 0px;
  width: 100%;

  span {
    align-items: center;
    color: ${(props) => props.theme["base-subtitle"]};
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
