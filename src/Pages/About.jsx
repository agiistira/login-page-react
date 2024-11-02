import AboutImage from "../assets/about.jpg";
import { Container, Button, Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <Row mb={5}>
          <Col md={6}>
            <img src={AboutImage} alt="Landing illustration" className="img-fluid" />
          </Col>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptatem, tenetur facere ad officia soluta fuga natus recusandae explicabo, quam corrupti. Ipsam asperiores nobis facilis itaque nemo enim eos nihil amet
              explicabo maiores quasi modi, blanditiis dolores accusantium rerum quaerat ad repudiandae ipsum totam officia expedita quo. Alias unde suscipit officiis perspiciatis necessitatibus maiores quod ducimus dolores laborum!
              Molestias eos doloribus, a aut eveniet, libero iure nam, possimus ipsa reiciendis aliquam unde! Et perferendis enim excepturi pariatur. Sit, repellendus at optio excepturi error deleniti incidunt rem rerum vel qui ipsa
              voluptatibus vitae non placeat animi eligendi commodi ab voluptates libero obcaecati dignissimos quibusdam odit unde! Sapiente, consectetur nisi assumenda corrupti totam qui ea est fuga voluptatibus accusamus eius cum id iusto
              quam rerum natus? Cupiditate facere sapiente maxime tempore fugit, voluptate, doloremque corrupti dicta perspiciatis excepturi, mollitia magnam quos exercitationem impedit molestiae ipsam. Iusto mollitia asperiores ipsam
              dolorum. Odit inventore quae debitis quidem dignissimos, ab voluptatem rem, recusandae iste ut omnis. Earum animi ab velit voluptatem, sunt sit! Enim, numquam. Debitis at possimus, magni ad eligendi doloremque labore officiis
              ipsum ipsa laborum dolores excepturi ex esse quae ipsam enim alias voluptatum iusto explicabo voluptate ducimus? Deserunt rem culpa facere neque.
            </p>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}

export default About;
