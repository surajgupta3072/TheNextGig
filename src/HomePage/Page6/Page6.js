import './Page6.css';
import { BsSlash } from 'react-icons/bs';

function Page6() {

    return (
        <div className="page6_maindiv">
            <div className="image_page6">
                <div className="numbers_page6">
                    <h1 className="client_number"><span className="number1">15,000+</span><BsSlash className="liner_page6 liner_1" /><h5 style={{ fontSize: "1.1rem", color: "white", marginLeft: "32px" }}>Minutes<br />spent</h5></h1>
                    <h1 className="projects_number"><span className="number2">140+</span><BsSlash className="liner_page6 liner_2" /><h5 style={{ fontSize: "1.1rem", color: "white", textAlign: "center", marginLeft: "-55%" }}>Videos</h5></h1>
                    <h1 className="awards_number" >700+<span className="number3"></span><BsSlash className="liner_page6 liner_3" /><h5 style={{ fontSize: "1.1rem", color: "white", textAlign: "center", marginLeft: "-55%" }}>Minutes of <br /> available <br /> content</h5></h1>
                    <h1 className="experience_number"><span className="number4">90+</span><h5 style={{ fontSize: "1.1rem", color: "white", marginTop: "4px", textAlign: "center", marginLeft: "-40%" }}>Connections made<br />for opportunities</h5></h1>
                </div>
                <div className="numbers_page6_mobile">
                    <h1 className="client_number"><span>15,000+</span><div className="slasher"><BsSlash className="liner_page6 liner_1" /></div><h5 style={{ fontSize: "1rem", color: "white" }}>Minutes<br />spent</h5></h1>
                    <h1 className="projects_number"><span >140+</span><div className="slasher"><BsSlash className="liner_page6 liner_2" /></div><h5 style={{ fontSize: "1rem", color: "white" }}>Videos</h5></h1>
                    <h1 className="awards_number" ><span>700+</span><div className="slasher"><BsSlash className="liner_page6 liner_3" /></div>
                        <h5 style={{ fontSize: "1rem", color: "white" }}> Minutes of available content</h5></h1>
                    <h1 className="experience_number"><span>90+</span><h5 style={{ fontSize: "1rem", color: "white" }}>Connections made<br />for opportunities</h5></h1>
                </div>
                <div className="numbers_page6_tab">
                    <div className="first_two">
                        <h1 className="client_number"><span className="number1">15,000+</span><BsSlash className="liner_page6 liner_1" /><h5 style={{ fontSize: "1rem", color: "white" }}>Minutes<br />spent</h5></h1>
                        <h1 className="projects_number"><span className="number2">140+</span><BsSlash className="liner_page6 liner_2" /><h5 style={{ fontSize: "1rem", color: "white" }}>Videos</h5></h1>
                    </div>
                    <div className="last_two"> <h1 className="awards_number" ><span className="number3">700+</span><BsSlash className="liner_page6 liner_3" /><h5 style={{ fontSize: "1rem", color: "white" }}> Minutes of available content</h5></h1>
                        <h1 className="experience_number"><span className="number4">90+</span><h5 style={{ fontSize: "1rem", marginLeft: "-35px", color: "white" }}>Connections made<br />for opportunities</h5></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page6;