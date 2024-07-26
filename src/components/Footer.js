import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/discord.svg';
import { CiMail } from "react-icons/ci";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
          <img src={logo} alt="Logo" style={{ maxWidth: '100px', height: 'auto' }} />
          <p> <CiMail /> zineb.alaoui663@gmail.com</p>


          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
  <a href="https://www.linkedin.com/in/zineb-alaouii/" target="_blank" rel="noopener noreferrer">
    <img src={navIcon1} alt="LinkedIn" />
  </a>
  <a href="https://github.com/Zineb2a" target="_blank" rel="noopener noreferrer">
    <img src={navIcon2} alt="GitHub" />
  </a>
  <a href="https://discordapp.com/users/334008628631830529" target="_blank" rel="noopener noreferrer">
    <img src={navIcon3} alt="Discord" />
  </a>
</div>

            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}