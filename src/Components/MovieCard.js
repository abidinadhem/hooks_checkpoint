import React, { Component } from "react";
import { Card } from "react-bootstrap";

class MovieCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" width={50} height={300} src={this.props.posterURL} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
           Rating : {this.props.rating}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default MovieCard;
