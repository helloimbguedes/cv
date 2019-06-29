import styled from "styled-components";
import { normalFont, formalFont } from "../../_static/typography";
import { grey, black } from "../../_static/color-palette";

export const ProfileContainer = styled.div`
  width: calc(100% - 20px);
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%);
`;

export const ProfileDescription = styled.span`
  font-family: ${normalFont};

  h1 {
    margin: 0;
    padding: 4px 0 2px;
    font-size: 26px;
  }

  span {
    font-size: 18px;
  }
`;

export const EmailLabel = styled.a`
  margin: 0;
  padding: 0;
  line-height: 18px;
  font-family: ${formalFont};
  font-size: 20px;
  text-decoration: none;
  color: ${grey};

  :hover {
    color: ${black};
    text-decoration: underline;
  }
`;

export const CurrentCompanyLogo = styled.img`
  position: absolute;
  height: 32px;
  padding-left: 6px;
  transform: translate(0, -25%);
  object-fit: contain;
`;

export const SocialMediaList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 8px 0 0;

  li {
    display: inline;
    margin-right: 8px;
  }
`;

export const SocialMediaIcon = styled.img`
  width: 32px;
  height: 32px;
`;
