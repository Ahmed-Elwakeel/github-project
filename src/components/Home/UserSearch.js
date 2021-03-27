import { Container, Row, Col, Button, Form } from "react-bootstrap";
import style from "./Home.module.scss";
const UserSearch = ({ setUserName, updateInfo, userName, isLoading }) => {
  return (
    <Container className={style.search}>
      <Form onSubmit={updateInfo}>
        <Row>
          <Col>
            <Form.Control
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Type the user name"
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search by username
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default UserSearch;
