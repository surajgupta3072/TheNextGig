import Page3 from './Page3/Page3';
import { useParams } from "react-router-dom";

function MasterClassDetails(props) {
  let { id } = useParams();
  return (
    <div>
      <Page3 prop={props.auth} id={id} />
    </div>
  );
}

export default MasterClassDetails;
