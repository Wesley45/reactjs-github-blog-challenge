import React from 'react';
import { FaBuilding, FaExternalLinkAlt, FaGithub, FaUsers } from "react-icons/fa";

import { Avatar, ProfileContainer, ProfileContent, ProfileInfo } from './styles';

type ProfileProps = {
  profile?: {
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
  }
}

export const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <ProfileContainer>
      <Avatar>
        <img src={`${profile?.avatar_url}`} alt={`Avatar ${profile?.name}`} />
      </Avatar>
      <ProfileContent>
        <div className='profile-header'>
          <h2>{profile?.name}</h2>
          <a href={profile?.html_url} target="_blank">
            <span>Github</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
        <p>{profile?.bio}</p>
        <ProfileInfo>
          <span>
            <FaGithub size={18} />
            {profile?.login}
          </span>
          <span>
            <FaBuilding size={18} />
            {profile?.company}
          </span>
          <span>
            <FaUsers size={18} />
            {profile?.followers}
          </span>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
