import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({searchText,setSearchText}) {


  let handleChange = (e)=>{
    setSearchText(e.target.value);
  }

  console.log(searchText);
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick = {()=>navigate("/")}>
          <img className = "logo" src='https://acegif.com/wp-content/gifs/pizza-64.gif'/>
          Pizza APP Treflo
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-4 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick = {()=>navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick = {()=>navigate("/")}>About</Nav.Link>
            <Nav.Link onClick = {()=>navigate("/")}>Contact Us</Nav.Link>
            <Nav.Link onClick = {()=>navigate("/cart")}>
            <img className = "logo" style = {{width:"30px",height:"30px"}}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJKCLXakWUQv2EPYkxrCX3ZWYei7PQDonzOJAFpeu5g&s'/>
            Cart
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Pizza..."
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;