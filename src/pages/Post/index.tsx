import React, { useEffect } from 'react';
import { format, formatDistanceToNow } from "date-fns";
import ReactMarkdown from 'react-markdown';
import { FaCalendar, FaChevronLeft, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import ptBR from "date-fns/locale/pt";

import { useIssue } from '../../services/hooks/useIssue';

import { Info, PostContainer, PostContent, PostContentCode, PostInfo, PostNavigation } from './styles';

export const Post: React.FC = () => {
  const { id } = useParams();
  const { data: issue } = useIssue({
    id: Number(id),
    repository: "reactjs-github-blog-challenge",
    username: "Wesley45",
  });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, []);

  const createdAt = new Date(issue?.created_at || new Date());

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
    <PostContainer>
      <PostInfo>
        <PostNavigation>
          <Link to="/">
            <FaChevronLeft size={12} />
            <span>Voltar</span>
          </Link>
          <a href={issue?.html_url} target="_blank">
            <span>Ver no github</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </PostNavigation>
        <h2>{issue?.title}</h2>
        <Info>
          <span>
            <FaGithub size={18} />
            {issue?.user.login}
          </span>
          <time
            title={publishedDateFormatted}
            dateTime={createdAt.toISOString()}
          >
            <FaCalendar size={18} /> {publishedDateRelativeToNow}
          </time>
          <span>
            <FaComment size={18} />
            {issue?.comments} {issue?.comments === 1 ? 'comentário' : 'comentários'}
          </span>
        </Info>
      </PostInfo>
      <PostContent>
        <ReactMarkdown>{issue?.body || ''}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}


