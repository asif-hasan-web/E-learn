import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Service from './component/Service/Service';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Icons from './component/Icons/Icons';
import CoursePlan from './component/Hero-service/CoursePlan';
import Join from './component/Join/Join';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
        <Switch>
          
          <Route exact path="/">
            <Home></Home>
            <Icons></Icons>
                <CoursePlan></CoursePlan>
                  <Join></Join>
             <Footer></Footer>
          </Route>
          <Route path="/home">
            <Home></Home>
              <Icons></Icons>
                <CoursePlan></CoursePlan>
                  <Join></Join>
             <Footer></Footer>
          </Route>
          
          <Route path="/service">
            <Service></Service>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <About></About>
            <Footer></Footer>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          
          <Route path="*">
            <NotFound></NotFound>
            <Footer></Footer>
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
