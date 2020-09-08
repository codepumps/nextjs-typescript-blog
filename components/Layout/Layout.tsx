import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Container,
  Content,
  Header,
  Avatar,
  Navbar,
  ProfileDetails,
  Links,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
} from "./styles";
import * as profile from "../../images/profile.png";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Avatar src={profile} />
    <Content>
      <Header>
        <Navbar>
          <ProfileDetails>
            <div className="personal-info">
              <h1>Serkan</h1>
              <strong>Junior Front-End Developer</strong>
            </div>
            <div className="social-icons">
              <Link href="https://github.com/codepumps">
                <a target="_blank">
                  <GithubIcon />
                </a>
              </Link>
              <Link href="https://github.com/codepumps">
                <a target="_blank">
                  <LinkedinIcon />
                </a>
              </Link>
              <Link href="https://github.com/codepumps">
                <a target="_blank">
                  <TwitterIcon />
                </a>
              </Link>
              <Link href="https://github.com/codepumps">
                <a target="_blank">
                  <FacebookIcon />
                </a>
              </Link>
            </div>
          </ProfileDetails>
        </Navbar>
        <Links>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Links>
      </Header>
      {children}
      {/* <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer> */}
    </Content>
  </Container>
);

export default Layout;
