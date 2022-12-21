import React, { useCallback, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa';

import { useIssues } from '../../services/hooks/useIssues';
import { useProfile } from '../../services/hooks/useProfile';

import { Posts } from './Posts';
import { Profile } from './Profile';

import { BlogContainer, BlogContent, BlogHeader, Button, Input, SearchContent } from './styles';

type SearchContentData = {
  search: string
}

export const Blog: React.FC = () => {
  const [search, setSearch] = useState("");
  const { data: profile } = useProfile({ username: "Wesley45" });
  const { data: issues } = useIssues({
    username: "Wesley45",
    repository: "reactjs-github-blog-challenge",
    search
  });
  const { register, handleSubmit } = useForm<SearchContentData>();

  const onSubmit = useCallback((formValues: SearchContentData) => {
    setSearch(formValues.search);
  }, []);

  return (
    <BlogContainer>
      <Profile profile={profile} />
      <BlogContent>
        <BlogHeader>
          <h3>Publicações</h3>
          <span>{issues?.items.length ?? 0} publicações</span>
        </BlogHeader>
        <SearchContent onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder='Buscar conteúdo' {...register("search")} />
          <Button type="submit">
            <FaSearch size={12} />
            <span>Buscar</span>
          </Button>
        </SearchContent>

        <Posts posts={issues?.items || []} />
      </BlogContent>
    </BlogContainer>
  )
}

