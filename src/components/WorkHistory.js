import React from "react"
import Img from "gatsby-image"
import ThemeContext from "../utils/theme-context"
import { Container, Row, Col, Badge } from "react-bootstrap"

const CompanyCard = props => {
  const { company, position, startDate, endDate, location } = props.frontmatter
  return (
    <Container className="m-auto">
      <Img
        fluid={props.image}
        style={{
          maxHeight: "15rem",
          maxWidth: "15rem",
          borderRadius: company !== "Royal Victoria Hospital" ? "50%" : "0",
        }}
        className="m-auto"
      />
      <h2 className="m-auto pt-2">{company}</h2>
      <h5 className="text-muted">{location}</h5>
      <h4 className="mt-3">{position}</h4>
      <h5
        className="text-muted mt-4"
        style={{ lineHeight: "1.1rem", fontSize: "1.2rem" }}
      >
        {startDate}-{endDate}
      </h5>
    </Container>
  )
}

export default props => (
  <ThemeContext.Consumer>
    {({ dark }) => (
      <Container
        style={{ overflow: "auto", padding: "1rem" }}
        className="project-link text-center"
      >
        <Row>
          <Col className="col-4">
            <CompanyCard frontmatter={props.frontmatter} image={props.image} />
          </Col>
          <Col className="col-8">
            <div
              className="text-justify mt-5"
              dangerouslySetInnerHTML={{ __html: props.html }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-4"></Col>
          <Col className="col-8">
            <div className="margin-bottom">
              {props.frontmatter.tags.map(tag => (
                <Badge
                  key={tag}
                  pill
                  variant={dark ? "dark" : "light"}
                  className={`mr-2 ${dark && "bg-vader-dark"}`}
                  style={{ fontSize: "1rem" }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    )}
  </ThemeContext.Consumer>
)
