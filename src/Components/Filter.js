import React, { useState } from "react";
import { Row, Container, Col, InputGroup, Form, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";

function Filter(props) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  const submit = () => {
    props.submit({ search, rating });
  };

  const reset = () => {
    setSearch("");
    setRating(0);

    props.submit({ search: "", rating: 0 });
  };

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
              type="text"
              placeholder="Search"
            />
          </InputGroup>
        </Col>
        <Col>
          <StarRatings
            rating={rating}
            starRatedColor="yellow"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
          />
        </Col>
        <Col>
          <Button variant="success" onClick={submit}>
            Search
          </Button>
          <Button variant="success" onClick={reset}>
            reset{" "}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Filter;
