import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Helmet>
        <title>Italy Restaurant Pizza Menu</title>
        <meta name="description" content="Delicious pizzas from Italy." />
        <meta name="keywords" content="Italy, Pizza, Pasta, Restaurant" />
        <meta name="author" content="Italy Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1 style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>
        # Fast Restaurant #
      </h1>
      <NavScrollExample />
    </header>
  );
}

// function Nav() {
//   return (
//     <nav>
//       <h2>Navbar </h2>
//       <ul>
//         <li>
//           <a href="#Sayfa1">Sayfa1</a>
//         </li>
//         <li>
//           <a href="#Sayfa2">Sayfa2</a>
//         </li>
//         <li>
//           <a href="#Sayfa3">Sayfa3</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

function NavScrollExample() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="primary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#" className="font-weight-bold">
          Italy Restaurant Pizza Menu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Menu() {
  return (
    <section>
      <Container>
        <Pizza />
        <Pizza />
        <Pizza />
      </Container>
    </section>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= 6 && hour <= 22) {
  //   alert("We are currently open");
  // } else {
  //   alert("Sorry we're closed");
  // }
  return (
    <footer>
      <p>{new Date().getFullYear()} hakları saklıdır.</p>

      <nav>
        <ul>
          <li>
            <a href="#" title="Gizlilik Politikası">
              Gizlilik Politikası
            </a>
          </li>
          <li>
            <a href="#" title="Kullanım Şartları">
              Kullanım Şartları
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

function Pizza() {
  return (
    <article>
      <div>
        <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
        <h2>Pizza Spinaci</h2>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      </div>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root"));
