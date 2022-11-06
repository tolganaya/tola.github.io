import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Best_Star_Projector_for_Room.png";
import projImg2 from "../assets/img/IMG_5911.PNG";
import projImg3 from "../assets/img/IMG_5912.JPG";
import projImg4 from "../assets/img/IMG_5914.PNG";
import projImg5 from "../assets/img/IMG_5916.PNG";
import projImg6 from "../assets/img/sfvc.jpg";
import projImg7 from "../assets/img/IMG_5920.PNG";
import projImg8 from "../assets/img/4.jpg";
import projImg9 from "../assets/img/IMG_5921.JPG";
import projImg10 from "../assets/img/IMG_5924.PNG";
import projImg11 from "../assets/img/IMG_5925.PNG";
import projImg12 from "../assets/img/IMG_5927.PNG";
import projImg13 from "../assets/img/IMG_5928.PNG";
import projImg14 from "../assets/img/IMG_5929.PNG";
import projImg15 from "../assets/img/IMG_5931.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shashbau",
      description: "рухани жангыру",
      imgUrl: projImg5,
      siteUrl: 'https://www.instagram.com/p/ChUvsR3Kyht/?igshid=YmMyMTA2M2Y=',
    },
    {
      title: "Star Night Light",
      description: "то, что не хватает к Алисе",
      imgUrl: projImg1,
      siteUrl: 'https://www.instagram.com/p/CgCT4RIovja/?next=%2F',
    },
    {
      title: "Grokking Algorithms",
      description: "алгоритмы в бумаге лучше усваиваются",
      imgUrl: projImg8,
      siteUrl: 'https://www.flip.kz/catalog?prod=814376',
    },
    {
      title: 'Hoodie "Anbu"',
      description: "anbu and madara one love",
      imgUrl: projImg7,
      siteUrl: 'https://www.instagram.com/p/ChwlnjULQcM/?igshid=YmMyMTA2M2Y=',
    },
    {
      title: "Vintage Corset",
      description: "невероятно красивый",
      imgUrl: projImg3,
      siteUrl: 'https://www.instagram.com/reel/Cho4fRJFSn3/?igshid=YmMyMTA2M2Y=',
    },
    {
      title: "Socks Pack",
      description: "длинные необычные носочки - моя любовь",
      imgUrl: projImg11,
      siteUrl: 'https://www.instagram.com/p/CZeNzlWqUdd/?igshid=YmMyMTA2M2Y=',
    },  
    {
      title: "Laptop bag",
      description: "эстетичная замена рюкзаку",
      imgUrl: projImg2,
      siteUrl: 'https://www.instagram.com/p/Cf01AsSKdnp/?igshid=YmMyMTA2M2Y=',
    },  
    {
      title: "Fitness Uniform Gift-Certificate",
      description: "фитоняшка",
      imgUrl: projImg6,
      siteUrl: 'https://instagram.com/fitness.body_kz?igshid=YmMyMTA2M2Y=',
    },  
    {
      title: "Slytherin Scarf",
      description: "шарфик питониста",
      imgUrl: projImg9,
      siteUrl: 'https://www.meloman.kz/aksessuary/sharf-harry-potter-slytherin-190-sm.html',
    }, 
    {
      title: "Winter Eco Shopper",
      description: "зимняя замена шопперу",
      imgUrl: projImg4,
      siteUrl: 'https://www.instagram.com/p/Ccjw62rNAhn/?igshid=YmMyMTA2M2Y=',
    },  
    {
      title: "Contact Lens Container",
      description: "ёжик в тумане",
      imgUrl: projImg10,
      siteUrl: 'https://satu.kz/p87800729-dorozhnyj-nabor-dlya.html?adjust_campaign=share&adjust_adgroup=ios&adjust_creative=product&utm_campaign=share_button&utm_medium=referral_link&utm_source=b2c_app_ios',
    },   
    {
      title: "Necklace",
      description: "кей кезде кыз болайын",
      imgUrl: projImg12,
      siteUrl: 'https://www.instagram.com/p/CKJ2N6aD5l5/?igshid=YmMyMTA2M2Y=',
    }, 
    {
      title: "Home Flowers",
      description: "живые цветы - мой любимые",
      imgUrl: projImg13,
      siteUrl: 'https://www.instagram.com/p/CkSnT5_NQgd/?igshid=YmMyMTA2M2Y=',
    }, 
    {
      title: "Pepper Spray",
      description: "пусть не понадобится",
      imgUrl: projImg14,
      siteUrl: 'https://www.instagram.com/p/CSSTpG5r63H/?igshid=YmMyMTA2M2Y=',
    }, 
    {
      title: "Suitcase",
      description: "на будущий отпуск",
      imgUrl: projImg15,
      siteUrl: 'https://www.instagram.com/p/CSSTpG5r63H/?igshid=YmMyMTA2M2Y=',
    }, 
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
