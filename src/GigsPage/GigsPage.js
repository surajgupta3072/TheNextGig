import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';

function GigsPage(props) {
  return (
    <div>
      <Page1 prop={props.auth}/>
      <Page2/>
    </div>
  );
}

export default GigsPage;
