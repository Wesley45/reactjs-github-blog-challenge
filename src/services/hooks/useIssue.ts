import { useQuery } from "react-query";

import { api } from "../api";

export type Issue = {
  html_url: string;
  title: string;
  comments: number;
  created_at: string;
  body: string;
  user: {
    login: string;
  };
};

type IssueProps = {
  id: number;
  username: string;
  repository: string;
};

export async function getIssue({
  id,
  repository,
  username,
}: IssueProps): Promise<Issue> {
  const { data } = await api.get<Issue>(
    `repos/${username}/${repository}/issues/${id}`
  );
  return data;
}

export function useIssue(data: IssueProps) {
  return useQuery(["issue", data], () => getIssue(data), {
    staleTime: 1000 * 60 * 60 * 24,
  });
}
