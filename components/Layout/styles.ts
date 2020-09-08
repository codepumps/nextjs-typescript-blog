import styled, { css } from "styled-components";
import {
  Github,
  Facebook,
  LinkedinWithCircle,
  TwitterWithCircle,
} from "../../styles/icons";

export const Container = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: flex-start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;
export const Navbar = styled.nav`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
`;

export const ProfileDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 35px;

  > div.personal-info {
    > h1 {
      font-weight: 600;
      margin-bottom: 5px;
    }
    > strong {
      font-size: 15px;
      font-weight: 500;
    }
  }

  > div.social-icons {
    > a {
      margin-left: 15px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 45px;
  > a {
    margin-right: 40px;
    color: #4686ff;
  }

  &::after {
    content: "";
    width: 100%;
    height: 2.5px;
    background-color: #d4e2ff;
  }
`;

//links
const iconCss = css`
  width: 30px;
  height: 30px;
  fill: black;
`;
export const GithubIcon = styled(Github)`
  ${iconCss}
`;
export const LinkedinIcon = styled(LinkedinWithCircle)`
  ${iconCss}
`;
export const FacebookIcon = styled(Facebook)`
  ${iconCss}
  color:black;
`;
export const TwitterIcon = styled(TwitterWithCircle)`
  ${iconCss}
`;
