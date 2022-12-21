import React from 'react';

import { Post } from './Post';

import { PostsContainer } from './styles';

type PostsProps = {
  posts: {
    number: number;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
  }[]
}

export const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post key={post.number} post={post} />
      ))}
    </PostsContainer>
  )
}

