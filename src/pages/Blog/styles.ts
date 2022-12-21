import styled from "styled-components";

export const BlogContainer = styled.main`
  padding: 0;
  margin: 0 auto;
  margin-bottom: 14.625rem;
  margin-top: -5.938rem;
  max-width: 54rem;
  width: 100%;

  @media (max-width: 864px) {
    padding: 0 1.5rem;
  }
`;

export const BlogContent = styled.div`
  margin-top: 4.5rem;
`;

export const BlogHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.813rem;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
  }
`;

export const SearchContent = styled.form`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

export const Input = styled.input`
  align-items: center;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  gap: 0.5rem;
  height: 3.125rem;
  line-height: 1.625rem;
  padding: 0.75rem 1rem;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  :focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme["blue"]};
    outline: 0;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme.blue};
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 700;
  gap: 0.25rem;
  height: 3.125rem;
  line-height: 1.375rem;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  transition: background 0.1s;
  width: 8.938rem;

  &:hover {
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
  }
`;
