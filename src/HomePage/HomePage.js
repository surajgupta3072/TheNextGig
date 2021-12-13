import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
// import Page3 from './Page3/Page3';
import Page4 from './Page4/Page4';
// import Page5 from './Page5/Page5';
import Page6 from './Page6/Page6';
import Page7 from './Page7/Page7';
import Footer from '../Footer/Footer';

function HomePage() {
  return (
    <div>
      <Page1/>
      <Page2/>
      {/* <Page3/> */}
      {/* <Page5/> */} 
      <Page4/>
      <Page6/>
      <Page7/>
      <Footer/> 
    </div>
  );
}

export default HomePage;
