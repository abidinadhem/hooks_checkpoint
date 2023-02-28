import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Row, Container, Col, Button, Modal, Form } from "react-bootstrap";
import StarRatings from "react-star-ratings";

function MovieList(props) {
  const [list, setList] = useState([
    {
        posterURL: "https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
        description: "Joker",
        title: "Joker",
        rating: 5,
      },
      {
        posterURL: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/wjnhpz3osrai5aningjl/titanic?fimg-client-default",
        description: "Titanic",
        title: "Titanic",
        rating: 2,
      },
      {
        posterURL: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F03%2Faiw-payoff_1_sheet-lg-2000.jpg&q=60",
        description: "end game",
        title: "endgame",
        rating: 2,
      },
      {
        posterURL: "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274",
        description: "end game",
        title: "endgame",
        rating: 2,
      },
      {
        posterURL: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
        description: "Black Panther",
        title: "Black Panther",
        rating: 2,
      },
      {
        posterURL: "https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_9ef86295-4756-4c71-bb4e-20745c5fbc1a.jpg?v=1582781084",
        description: "1917",
        title: "1917",
        rating: 2,
      }
  ]);
  const [movie, setMovie] = useState({
    posterURL: "",
    description: "",
    title: "",
    rating: 0,
  });
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submit = () => {
    if (
      movie.posterURL.length === 0 ||
      movie.title.length === 0 ||
      isNaN(movie.rating)
    ) {
      alert("Check all the boxes");
    } else {
      setList([...list, movie]);
      setMovie({
        posterURL: "",
        description: "",
        title: "",
        rating: 0,
      });
      handleClose();
    }
  };

  const filter = (search, rating) => {
    setSearch(search);
    setRating(rating);
  };

  useEffect(() => {
    if (props.filter.search.length > 0 || props.filter.rating !== 0) {
      console.log("u need to update the list");
      filter(props.filter.search, props.filter.rating);
    } else {
      filter('', 0);
    }
  }, [props]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleShow} variant="success">
              Add movie
            </Button>
          </div>
        </Row>
        <Row>
          {list.length > 0
            ? list
            .filter(key =>{
                if(search.length >0){
                    return key.title.toLowerCase().includes(search.toLowerCase())
                }else {
                    return true
                }
            })
            .filter(key =>{
                if(rating !== 0){
                    return key.rating === rating
                }else {
                    return true
                }
            })
            .map(({ posterURL, description, title, rating }, index) => (
                <Col key={index} xs="4">
                  <MovieCard
                    posterURL={posterURL}
                    description={description}
                    title={title}
                    rating={rating}
                  />
                </Col>
              ))
            : "no movies for now"}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={submit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="title">Title</Form.Label>
              <Form.Control
                value={movie.title}
                onChange={(ev) =>
                  setMovie({ ...movie, title: ev.target.value })
                }
                id="title"
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>description</Form.Label>
              <Form.Control
                value={movie.description}
                onChange={(ev) =>
                  setMovie({ ...movie, description: ev.target.value })
                }
                type="text"
                placeholder="description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>rating</Form.Label>
              <StarRatings
              rating={movie.rating}
              starRatedColor="yellow"
              changeRating={(newrating, name) =>
                setMovie({ ...movie, rating: newrating })
              }
              numberOfStars={5}
              name="rating"
            />
            </Form.Group>
           
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                value={movie.posterURL}
                onChange={(ev) =>
                  setMovie({ ...movie, posterURL: ev.target.value })
                }
                type="text"
                placeholder="Image "
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submit}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default MovieList;
