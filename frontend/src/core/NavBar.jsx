import { Container, Navbar } from "react-bootstrap";
import SearchCity from "./SearchCity";
import logoImage from "../images/weatherIcon.png";

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoImage}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Weather App logo"
          />
          {" Weather App"}
        </Navbar.Brand>
        <SearchCity />
      </Container>
    </Navbar>
  );
}
