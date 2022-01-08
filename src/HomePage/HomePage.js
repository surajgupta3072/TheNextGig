import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page6 from './Page6/Page6';
import Page7 from './Page7/Page7';
import Footer from '../Footer/Footer';
import { useParams } from "react-router-dom";

function HomePage(props) {
  const { id } = useParams();
  return (
    <div>
      <div>
        <Page1 />
        {id !== "" ?
          <Page2 auth={props.auth} id={id} /> : <Page2 auth={props.auth} />}
        <Page6 />
        <Page7 />
        <Footer /></div>
    </div>
  );
}

export default HomePage;
