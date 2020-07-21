import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Impressum } from './components/Impressum';
import { Datenschutzerklaerung } from './components/Datenschutzerklaerung';
import { Layout } from './components/Layout';
import { Jumbotron } from './components/Jumbotron';
import Footer from './components/Footer';
import './fontawesome';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
import logo from './assets/tjm_logo.svg';

const Header = props => {
  const { location } = props;
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-bgcolor">
      <Navbar.Brand href="/">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav activeKey={location.pathname} className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Nav activeKey={location.pathname}>
          <Nav.Link href="/impressum">Impressum</Nav.Link>
          <Nav.Link href="/datenschutzerklaerung">Datenschutzerklärung</Nav.Link>
      </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
};
const HeaderWithRouter = withRouter(Header);

class MyHeader extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Router>
        <HeaderWithRouter />
        <Jumbotron />
          <Switch>
            <Route exact path="/" component={Home} />
            <Layout>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/impressum" component={Impressum} />
              <Route path="/datenschutzerklaerung" component={Datenschutzerklaerung} />
            </Layout>
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));