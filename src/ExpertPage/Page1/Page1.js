import expertData from './../Experts.json';
import masterData from './../../MasterClassPage/Masterclass.json';
import Container from 'react-bootstrap/Container';

function Page1(props) {
  const expert = expertData[props.Eid-1];
  return (
    <div>
        {/* {expert.ExpertName}
        <br/>
        {masterData[expert.ExpertMasterClass[0]-1].course_name}
        {masterData[expert.ExpertMasterClass[1]-1].course_name} */}
        <Container>

        </Container>
    </div>
  );
}

export default Page1;
