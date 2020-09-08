import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import styled from "styled-components";
import { Blog } from "../../interfaces";
import { blogData } from "../../utils/sample-data";
import Layout from "../../components/Layout/Layout";

type Props = {
  item?: Blog;
  errors?: string;
};

const BlogDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.title : "Blog Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && (
        <Container>
          <span>{item.date}</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <Link href="/blog">
            <a>Back to blog</a>
          </Link>
        </Container>
      )}
    </Layout>
  );
};

export default BlogDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = blogData.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = blogData.find((blog) => blog.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: #fff;
    padding: 7px 12px;
    margin-bottom: 10px;
    border-radius: 20px;
    font-size: 12px;
    width: max-content;
    background-color: black;
  }
  > h1 {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  > p {
  }

  > a {
    margin-top: 40px;
    color: #4686ff;
  }
`;
