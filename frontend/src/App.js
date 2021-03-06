import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import HomeScreen from '../src/screens/HomeScreen'
import ProductScreen from '../src/screens/ProductScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
          <Router>
                <Header />
                <main>
                    <Container>
                          <Route path="/" exact component={ HomeScreen }></Route>
                          <Route path="/products/:id" component={ProductScreen} ></Route>
                    </Container>
                </main>
                <Footer />
          </Router>
    </div>
  );
}

export default App;
