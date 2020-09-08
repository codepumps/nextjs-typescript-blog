import Layout from "../components/Layout/Layout";
import { Blog } from "../interfaces/index";
import { blogData } from "../utils/sample-data";
import SingleBlog from "../components/Blog/SingleBlog";
import { GetStaticProps } from "next";
import styled from "styled-components";

type Props = {
  items: Blog[];
};

const IndexPage = ({ items }: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Title>Last Posts 👋</Title>
    {items.map((item) => {
      return <SingleBlog key={item.id} item={item} />;
    })}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const lastItems = blogData.slice(Math.max(blogData.length - 2, 0)).reverse(); // get the last two posts.
  const items: Blog[] = lastItems;
  return {
    props: { items },
  };
};

export default IndexPage;

const Title = styled.h1`
  margin-bottom: 35px;
  font-size: 40px;
  font-family: 900;
  color: #4686ff;
`;
