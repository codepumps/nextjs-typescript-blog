import { GetStaticProps } from "next";
import Link from "next/link";

import { Blog } from "../../interfaces";
import { blogData } from "../../utils/sample-data";
import Layout from "../../components/Layout/Layout";
import SingleBlog from "../../components/Blog/SingleBlog";

type Props = {
  items: Blog[];
};

const blog = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    {items.map((item) => {
      return <SingleBlog key={item.id} item={item} />;
    })}
    <Link href="/">
      <a style={{ color: "#4361f9" }}>Next Page</a>
    </Link>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Blog[] = blogData;
  return { props: { items } };
};

export default blog;
