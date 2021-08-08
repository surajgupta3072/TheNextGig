import Page1 from './Page1/Page1';
import {useParams} from 'react-router-dom';

function ExpertPage() {
  let { id } = useParams();
  return (
    <div>
      <Page1 Eid={id}/>
    </div>
  );
}

export default ExpertPage;
