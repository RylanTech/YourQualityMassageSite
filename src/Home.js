import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

function Home() {
    document.body.style = 'background: #d8d6ca';
    return (
        <div>
          <Navbar className="nav-color" expand="xl">
          <Container>
            <Navbar.Brand href="/">
              <img className="navImg" src="./Images/logo.jpg"/>
              <h1 className="homeHead">Reset Massage</h1>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/schedule">Schedule Appointment</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/location">Location</Link>
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </Nav>
              <NavDropdown title="Massage Types" id="basic-nav-dropdown" className="dd">
              <Link className="ddLink" to="/swedishmassage">
                Swedish Massage
              </Link>
              <Link className="ddLink" to="/deeptissuemassage">
              Deep Tissue Massage
              </Link>
              <Link className="ddLink" to="/triggerpointmassage">
              Trigger Point Massage
              </Link>
              <Link className="ddLink" to="/hotstonemassage">
              Hot Stone Massage
              </Link>
              <Link className="ddLink" to="/cbdmassage">
              CBD Massage
              </Link>
              <Link className="ddLink" to="/aromatherapymassage">
              Aromatherapy Massage
              </Link>
              <Link className="ddLink" to="/myofasicalrekeasetherapy">
              Myofascial Release Therapy
              </Link>
              <Link className="ddLink" to="/sportsmassage">
              Sports Massage
              </Link>
              <Link className="ddLink" to="/aprenatalmassage">
              A Prenatal Massage
              </Link>
              <Link className="ddLink" to="/lymphaticdrainagemassage">
              Lymphatic Drainage Massage
              </Link>
            </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet/>
        </div>
    )
}
export default Home