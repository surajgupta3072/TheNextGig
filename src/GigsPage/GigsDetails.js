import Page3 from './Page3/Page3';
import {useParams} from "react-router-dom";

function GigsDetails() {
  let { id } = useParams();
  return (
    <div>
      <Page3 id={id}/>
    </div>
  );
}

export default GigsDetails;
