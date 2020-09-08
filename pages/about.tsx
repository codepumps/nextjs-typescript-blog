import Link from "next/link";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Container>
      <Title>About</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur
        nulla laborum id recusandae? Dicta omnis nemo error laudantium! Earum
        iusto culpa aliquid assumenda accusantium laborum expedita hic minus.
        Officia hic aperiam distinctio eligendi porro eius temporibus doloremque
        rem iure aliquam, aut voluptatibus nisi fuga reiciendis et tenetur dicta
        harum, veniam expedita ea! Magni modi dolores quam inventore eaque id
        quaerat velit saepe quod. Quidem explicabo pariatur doloremque nesciunt
        alias? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis fugiat magnam natus blanditiis, dicta illo repudiandae
        dolorum nihil expedita quos quasi assumenda tempora, ea corrupti animi
        repellendus, eveniet aut rerum nam a veritatis. Esse, quisquam? Ullam
        sit quaerat deserunt ratione praesentium quisquam eos voluptates, velit
        soluta quia reprehenderit, rerum nemo.
      </p>
      <Back>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Back>
    </Container>
  </Layout>
);

export default AboutPage;

const Container = styled.div`
  position: relative;
  height: 500px;
`;
const Title = styled.h1`
  margin-bottom: 35px;
`;
const Back = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  > a {
    color: #4686ff;
  }
`;
