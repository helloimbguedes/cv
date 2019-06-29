import React from "react";
import {
  ProfileContainer,
  ProfilePicture,
  ProfileDescription,
  CurrentCompanyLogo,
  EmailLabel,
  SocialMediaList,
  SocialMediaIcon
} from "./styled-components";
import profilePic from "../../_static/images/profile_pic.jpg";
import companyLogo from "../../_static/images/mindera-logo.png";
import linkedinIcon from "../../_static/images/linkedin-icon.png";
import instagramIcon from "../../_static/images/instagram-icon.png";
import twitterIcon from "../../_static/images/twitter-icon.png";
import githubIcon from "../../_static/images/github-icon.svg";

const Homepage = () => (
  <ProfileContainer>
    <ProfilePicture src={profilePic} alt="profile_image" />
    <ProfileDescription>
      <h1>Bruno Guedes</h1>
      <div>
        <span>
          23yo, Frontend Engineer at{" "}
          <a href="https://mindera.com/" target="_blank">
            <CurrentCompanyLogo src={companyLogo} alt="mindera" />
          </a>
        </span>
      </div>
      <div>
        <EmailLabel href="mailto:brunoguedesdev@gmail.com" target="_top">
          <span>brunoguedesdev@gmail.com</span>
        </EmailLabel>
      </div>
      <SocialMediaList>
        <li>
          <a
            href="https://www.linkedin.com/in/bruno-guedes-865833147/"
            target="_blank">
            <SocialMediaIcon src={linkedinIcon} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/brunoac.guedes/" target="_blank">
            <SocialMediaIcon src={instagramIcon} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bguedes11" target="_blank">
            <SocialMediaIcon src={twitterIcon} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/helloimbguedes" target="_blank">
            <SocialMediaIcon src={githubIcon} alt="linkedin" />
          </a>
        </li>
      </SocialMediaList>
    </ProfileDescription>
  </ProfileContainer>
);

export default Homepage;
