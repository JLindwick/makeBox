import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const FormComponent = (props) => {
  const [boxColor,setBoxColor] = useState("");
  const [arrOfDiv, setArrOfDiv] = useState([]);
  const handleColor = (e) =>{
    setBoxColor(e.target.value);
  }
  const makeDiv = (e) => {
    e.preventDefault();    
    var text = "<div style='width:350px;height:350px;background-color:" + boxColor + "'>&nbsp</div>";
    console.log(text);
    var ele = document.getElementById("blockContainer")
    ele.innerHTML += text;
  }
  return (
    <>
        <Form onSubmit={makeDiv } className="w-25 m-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Box Color</Form.Label>
        <Form.Control onChange={handleColor} type="text" placeholder="Box Color" />
        <Form.Text className="text-muted">
          enter a color and submit to add a box!
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
          <div className="d-flex justify-content-evenly" id="blockContainer">
          {arrOfDiv}
          </div>
    </>
  );
}

export default FormComponent;