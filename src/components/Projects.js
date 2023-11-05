import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/IMG_5249.JPG";
import projImg2 from "../assets/img/IMG_5250.JPG";
import projImg3 from "../assets/img/IMG_5555.jpg";
import projImg4 from "../assets/img/IMG_5254.JPG";
import projImg5 from "../assets/img/IMG_5252.JPG";
import projImg6 from "../assets/img/IMG_5255.JPG";
import projImg7 from "../assets/img/IMG_5256.JPG";
import projImg8 from "../assets/img/IMG_5258.JPG";
import projImg9 from "../assets/img/IMG_5257.JPG";
import projImg10 from "../assets/img/IMG_5259.JPG";
import projImg11 from "../assets/img/IMG_5263.JPG";
import projImg12 from "../assets/img/IMG_5266.PNG";
import projImg13 from "../assets/img/IMG_5268.PNG";
import projImg14 from "../assets/img/IMG_5269.PNG";
import projImg15 from "../assets/img/IMG_5261.JPG";
import projImg16 from "../assets/img/IMG_5264.JPG";
import projImg17 from "../assets/img/IMG_5270.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Зиплайнер",
      description: "или троллейный парк",
      imgUrl: projImg1,
      siteUrl: 'https://oiqaragai.com/ru/entertain',
    },
    {
      title: "Конная прогулка",
      description: "",
      imgUrl: projImg2,
      siteUrl: "https://dream-moments.kz",
    },
    {
      title: "Стрельба из лука",
      description: "",
      imgUrl: projImg3,
      siteUrl: 'https://dream-moments.kz',
    },
    {
      title: "Стрельба из ружья",
      description: "",
      imgUrl: projImg4,
      siteUrl: 'https://dream-moments.kz',
    },
    {
      title: "Экскурсия по обсерватории",
      description: "Плато Ассы",
      imgUrl: projImg5,
      siteUrl: 'https://dream-moments.kz',
    },
    {
      title: "МК по эпоксидной смоле",
      description: "",
      imgUrl: projImg6,
      siteUrl: 'https://instagram.com/soulplace.kz?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      title: "МК по флористике",
      description: "",
      imgUrl: projImg7,
      siteUrl: 'https://instagram.com/almari_flowers?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      title: "МК по тортикам",
      description: "оффлайн",
      imgUrl: projImg8,
      siteUrl: 'https://instagram.com/aizat_cakes?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      title: "МК из гипса",
      description: "",
      imgUrl: projImg9,
      siteUrl: 'https://instagram.com/la_terre_studio?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      title: "МК по ароматам",
      description: "",
      imgUrl: projImg10,
      siteUrl: 'https://instagram.com/aromavision.kz?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      title: "Сертификат ЗЯ",
      description: "золотое яблоко",
      imgUrl: projImg11,
      siteUrl: 'https://goldapple.kz/',
    },
    {
      title: "Сертиф Cosmoskin",
      description: "бронепленка",
      imgUrl: projImg12,
      siteUrl: 'https://instagram.com/cosmoskins?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      title: "Сертиф On Jeti",
      description: "қазақша әшекейлер",
      imgUrl: projImg13,
      siteUrl: 'https://instagram.com/on7.17?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      title: "Сертиф Inoya",
      description: "",
      imgUrl: projImg14,
      siteUrl: 'https://instagram.com/inoya_brand?igshid=NGVhN2U2NjQ0Yg==',
    },
    {
      title: "Сертиф Intertop",
      description: "",
      imgUrl: projImg15,
      siteUrl: 'https://intertop.kz/ru-kz/shopping/catalog/women/',
    }, 
    {
      title: "Сертиф Decathlon",
      description: "",
      imgUrl: projImg16,
      siteUrl: 'https://www.decathlonkz.com',
    }, 
    {
      title: "Сертиф QR",
      description: "",
      imgUrl: projImg17,
      siteUrl: 'hhttps://instagram.com/qazaq.republic?igshid=NGVhN2U2NjQ0Yg==',
    }, 
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Wishlist</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
