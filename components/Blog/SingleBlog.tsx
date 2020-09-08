import React from "react";
import Link from "next/link";

import { Blog } from "../../interfaces";
import { Container, Date } from "./styles";

type Props = {
  item: Blog;
};
const SingleBlog: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <Date>{item.date}</Date>
      <h1>
        <Link href="/blog/[id]" as={`/blog/${item.id}`}>
          <a>{item.title}</a>
        </Link>
      </h1>
      <p>{item.description.slice(0, 100) + "..."}</p>
    </Container>
  );
};

export default SingleBlog;
