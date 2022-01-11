import Page1 from './Page1/Page1';
import { useParams } from 'react-router-dom';

function ExpertPage(props) {
  let { id } = useParams();
  return (
    <div>
      <Page1 auth={props.auth} Eid={id.split("_").join(" ")} />
    </div>
  );
}

export default ExpertPage;
