
import '../styles/style.scss';
import { MainHeader } from './MainHeader';
import { Intro } from './Intro';
import { Reviews } from './Reviews';
import { Simplify } from './Simplify';
import { Footer } from './Footer';


function Homepage() {
  return (
    <div style={{backgroundImage: 'url(./assets/images/bg-simplify-section-desktop.svg)'}} className="homepage">
        <MainHeader></MainHeader>
        <Intro></Intro>
        <Reviews></Reviews>
        <Simplify></Simplify>
        <Footer></Footer>
    </div>
  );
}

export default Homepage;
