import { useLocation,useNavigate } from "react-router-dom"
import "./Created.css"
import svgticket from "../../assets/images/pattern-ticket.svg"
import personLogo from "../../assets/images/image-avatar.jpg"
import svgFlower from "../../assets/images/logo-mark.svg";
const Created = () => {
    const  location  = useLocation();
    const name = location.state?.name;
    const email = location.state?.email;
    const image = location.state?.image;
    const navigate = useNavigate();
  return (
    <>
    <h2 className="text-bold text-center mb-5">Congrats,<span className="pink">{name}</span>! 
    <span className="d-block  pt-2">
    Your ticket is ready.
    </span>
    </h2>
      <p className="text-center opacity-75">We've emailed your ticket to<span className="d-block"> <span className="pink fw-semibold fs-5">{email}</span> and will send</span> 
      <span className="d-block">updates to the run up to the event.</span></p>
      <div className="ticket-wrapper">
        <img src={svgticket} alt="" className="wrap-ticket"/>
        <div className="absolute-ticket">
        <div className="dateImage-div">
        <img src={svgFlower} alt="" />
        <p className="ms-3  fw-bold fs-3 d-inline">Coding Conf</p>
        <p className="ms-5 opacity-50">Jan 11,2025 / pakistan, Isalmabad</p>
        </div>
         <div className="bio-div mt d-flex">{/*image and two p */}
           <img src={image} alt="" className="image1 mt-3" />
           <div className="name-email ms-3 mb-1 pb-2">
            <p className="mb-0 fw-bold fs-3">{name}</p>
            <p className="mb-2">{email}</p>
            </div>
         </div>
         </div>
         </div>
    </>
  )
}

export default Created
