import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import WorkExps from "./components/WorkExps/WorkExps";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
import css from './styles/app.module.scss';
const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <WorkExps/>
    <Portfolio/>
    <Works/>
    <People/>
    <Footer/>
  </div>
};

export default App;
