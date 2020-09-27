import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"

export default props => (
  <Card className="card-container" as={Link} to={props.to}>
    <Card.Img as={Img} fluid={props.featuredImage} className="height-60" />
    <Card.Body className="pt-4">
      <Card.Title>
        <h4>{props.title}</h4>
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {props.subtitle}
      </Card.Subtitle>
      <Card.Text>{props.excerpt}</Card.Text>
    </Card.Body>
  </Card>
)
