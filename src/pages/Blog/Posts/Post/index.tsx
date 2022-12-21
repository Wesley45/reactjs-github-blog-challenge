import React from 'react';
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt";

import { PostContainer, PostContent, PostHeader } from './styles';

type PostProps = {
  post: {
    number: number;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
  }
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const createdAt = new Date(post.created_at);

  const publishedDateFormatted = format(
    createdAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <PostContainer to={`/post/${post.number}`}>
      <PostHeader>
        <h4>{post.title}</h4>
        <time
          title={publishedDateFormatted}
          dateTime={createdAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </PostHeader>
      <PostContent>
        <p>{post.body}</p>
      </PostContent>
    </PostContainer>
  )
}
