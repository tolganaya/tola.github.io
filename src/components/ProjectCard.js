import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="proj-imgbx">
            <img src={imgUrl} className="img-wishlist"/>
          </div>
          <div className="proj-txtx">
            <span>{description}</span>
            <br></br>
            <Button variant="light" style={{ borderRadius: 30 }}>
              <a href={siteUrl} target="_blank">
                Click
              </a>
            </Button>
          </div>
        </div>
      </Col>
      {/* <Col size={12} sm={6} md={4}>
      <div style={{ textAlign: "center" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx" style={{ color: "white" }}>
            <span>{description}</span>
          </div>
        </div>
        <span>{description}</span>
        <button className="proj-txtx">
          <a href={siteUrl} >
            <h4>{title}</h4>
          </a>
        </button>
      </div>
    </Col>*/}
    </>
  )
}
