import { useQuery } from "react-query";

import { api } from "../api";

export type Profile = {
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
};

type ProfileProps = {
  username: string;
};

export async function getProfile({ username }: ProfileProps): Promise<Profile> {
  const { data } = await api.get<Profile>(`users/${username}`);
  return data;
}

export function useProfile(data: ProfileProps) {
  return useQuery(["profile", data], () => getProfile(data), {
    staleTime: 1000 * 60 * 60 * 24,
  });
}
