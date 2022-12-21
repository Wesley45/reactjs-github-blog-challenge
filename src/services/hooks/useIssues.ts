import { useQuery } from "react-query";

import { api } from "../api";

export type Issue = {
  items: {
    number: number;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
  }[];
};

type IssueProps = {
  search: string;
  username: string;
  repository: string;
};

export async function getIssues({
  search,
  username,
  repository,
}: IssueProps): Promise<Issue> {
  const { data } = await api.get<Issue>(`search/issues`, {
    params: {
      q: `${search} repo:${username}/${repository}`,
    },
  });
  return data;
}

export function useIssues(data: IssueProps) {
  return useQuery(["issues", data], () => getIssues(data), {
    staleTime: 1000 * 60 * 60 * 24,
  });
}
