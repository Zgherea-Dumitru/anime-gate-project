import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import ResponsiveNavBar from "./components/ResponsiveNavBar";
import AnimeDetails from "./components/AnimeDetails";
import About from "./components/About";
import MyList from "./components/MyList";
import Browse from "./components/Browse";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/anime/:id" component={AnimeDetails} />
        <Route exact path="/about" component={About} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/list" component={MyList} />
        <Route path="/" component={Home} />
      </Switch>
      <ResponsiveNavBar />
      <Footer />
    </div>
  );
}

export default App;
