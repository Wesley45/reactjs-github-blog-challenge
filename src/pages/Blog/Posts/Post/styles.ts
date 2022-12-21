import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled(Link)`
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 16.25rem;
  padding: 2rem;
  transition: border 0.1s;
  text-decoration: none;
  width: 100%;

  :hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
  }
`;

export const PostHeader = styled.header`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  h4 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
  }

  time {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    margin-top: 0.313rem;
  }
`;

export const PostContent = styled.div`
  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
