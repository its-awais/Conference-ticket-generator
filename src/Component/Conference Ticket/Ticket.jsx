import "./Ticket.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useRef } from "react";
import {  useNavigate } from "react-router-dom"
const Ticket = () => {
    const[image,setImage] = useState(null);
    const[email,setEmail] = useState("");
    const[name,setName] = useState("");
    const[nameError,setNameError] = useState("")
    const[error,setError] = useState("")
    const[gitHubError, setGitHubError] = useState("")
    const[gitHubUserName,setGitHubUserName] = useState("")
    const fileInput = useRef(null);
    const navigate = useNavigate();
    // console.log(email)
    const handleImageUpload = (event)=>{
        const file = event.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file));
        }
    };
    const mangeSvgClick = ()=>{//in svg when click and from control when we click in svg
      if(fileInput.current){
        fileInput.current.click();//then automatically triger the file
      }
    }
    const gitHubUserNames = (userName)=>{
   const gitHubRegex = /^(?!-)[a-zA-Z0-9-]{1,39}(?<!-)$/
       return gitHubRegex.test(userName)
    }
    const validEmail = (email)=>{
      const emailRegex = /^[a-zA-Z0-9._+%-]+@[a-zA-Z]+.[a-zA-Z]{3,}/
      return emailRegex.test(email)
    }
    const checkAllInputs = (event)=>{
      event.preventDefault();
      let isValid = true;
      if(name==="" && name.length < 5 && isNaN(name)){
        setNameError("Please enter a name")
      }
      
       if(!email || !validEmail(email)){
        setError("please enter a email (aa46@gmail.com) like this")
       isValid = false;
      }else{
        setError("");
       }
       if(!gitHubUserName || !gitHubUserNames(gitHubUserName)){
        setGitHubError("please don't use hyphen in first and end of userName")
       isValid = false;
      }else{
        setGitHubError("")
       }
       if(isValid){
        navigate("/created",{state:{name,email,image}})
       }
    };
  return (
    <>
    <h1 className="fw-bold g-3x mt-5">Your Journey to Coding Conf <span className="d-block text-center pt-2">2025 Starts Here!</span></h1>
    <p>Secure your spot at next year's biggest coding conference.</p>
    <Form>
    <Form.Group className="mb-3 " controlId="formBasicImage">
        <Form.Label>Upload Avatar</Form.Label>
        <div className="dashed-border d-flex flex-column align-items-center">
        <svg onClick={mangeSvgClick} className="svg1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 30 30"><path fill="#F57463" fill-rule="evenodd" d="M21.894 11.252a.264.264 0 0 1-.229-.225c-.368-2.634-2.51-5.924-6.663-5.924-4.465 0-6.3 3.636-6.657 5.928a.264.264 0 0 1-.228.22c-2.95.362-4.945 2.622-4.945 5.729a5.802 5.802 0 0 0 3.423 5.277 6.274 6.274 0 0 0 2.305.468h2.528a.45.45 0 0 0 .45-.45c0-.267-.233-.472-.5-.484a3.077 3.077 0 0 1-2.049-.9 3.123 3.123 0 0 1 0-4.418l3.461-3.462c.147-.146.307-.277.479-.392.076-.05.158-.085.236-.129.1-.054.196-.114.301-.158.1-.04.206-.065.308-.096.092-.027.181-.062.276-.081.191-.039.384-.056.578-.059.011 0 .022-.004.034-.004.01 0 .018.003.027.004.196.002.391.02.584.059.094.019.18.053.271.08.105.031.211.055.313.098.1.042.193.098.288.15.084.046.17.083.25.137.154.103.295.221.428.349.016.014.034.024.049.039l3.463 3.463a3.124 3.124 0 0 1 0 4.42c-.558.56-1.284.86-2.05.897-.266.013-.497.219-.497.486 0 .249.202.451.451.451h2.512c.435 0 1.314-.06 2.344-.473a5.794 5.794 0 0 0 3.394-5.272c0-3.104-1.991-5.363-4.935-5.728Z" clip-rule="evenodd"/><path fill="#F57463" fill-rule="evenodd" d="M18.464 19.62a.936.936 0 0 0 .663-1.6l-3.464-3.464a.938.938 0 0 0-.664-.275l-.014.002a.932.932 0 0 0-.65.274l-3.462 3.462a.936.936 0 1 0 1.326 1.325l1.864-1.862v6.479a.937.937 0 1 0 1.875 0v-6.48l1.864 1.863a.93.93 0 0 0 .662.275Z" clip-rule="evenodd"/></svg>
        <Form.Control ref={fileInput} className="input-size d-none" id="upload-image"  type="file" accept="image/*" placeholder="Drag and drop or click to upload" onChange={handleImageUpload} required ></Form.Control>
        <p>Drag and drop or click to upload</p>
       </div>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control className="input-size" type="text" placeholder="" required title="please" onChange={(e) =>setName(e.target.value) }/> 
        <p className="red">{nameError}</p>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="input-size" onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="example@gmail.com" />
        {error && 
        <p className="mb-0 mt-1 red">{error}</p>
        }
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 mt-0" controlId="formBasicUserName">
        <Form.Label>GitHub Username</Form.Label>
        <Form.Control className="input-size" onChange={(e)=> setGitHubUserName(e.target.value)}  placeholder="@yourUsername" type="text" />
        {gitHubError && 
        <p className="mb-0 mt-1 red">{gitHubError}</p>
        }
      </Form.Group>
      <Button  type="submit" className="input-size mt-3 " id="button" onClick={checkAllInputs}>
        Generate My Ticket
      </Button>
    </Form>
    </>
  )
}

export default Ticket
