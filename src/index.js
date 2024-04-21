import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider, Helmet } from "react-helmet-async";

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
      <HelmetProvider>
        <Helmet>
          <title>Italy Restaurant Pizza Menu</title>
          <meta name="description" content="Delicious pizzas from Italy." />
          <meta name="keywords" content="Italy, Pizza, Pasta" />
          <meta name="author" content="Italy Restaurant" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
      </HelmetProvider>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Italy Restaurant Pizza Menu</h1>
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <h2>Navbar </h2>
      <ul>
        <li>
          <a href="#Sayfa1">Sayfa1</a>
        </li>
        <li>
          <a href="#Sayfa2">Sayfa2</a>
        </li>
        <li>
          <a href="#Sayfa3">Sayfa3</a>
        </li>
      </ul>
    </nav>
  );
}

function Menu() {
  return (
    <section>
      <Pizza />
      <Pizza />
      <Pizza />
    </section>
  );
}

function Footer() {
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
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root"));
