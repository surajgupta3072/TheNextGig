import {useParams} from "react-router-dom";

function CompanyPage() {
let { id } = useParams();
  return (
    <div>
        {id}
    </div>
  );
}

export default CompanyPage;
