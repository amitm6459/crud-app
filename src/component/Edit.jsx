import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import Employess from "./Employess";
import { useNavigate } from 'react-router-dom';
import { Button, TextField,styled,Box } from '@mui/material';


const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-item: center;
  height: 300px;
  ${"" /* border:1px solid; */}
  margin:0 auto;
  margin-top: 200px;
`;
const InputText = styled(TextField)`
  margin-top: 20px;
  outline: none;
`;
const SubmitButton = styled(Button)`
  background: orange;
  color: #fff;
`;

function Edit(props) {

    
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id,setId] = useState('');

  let history= useNavigate();

  var index = Employess.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
     let a= Employess[index]
     a.name=name;
     a.age=age;
    
     history("/");
  };

  useEffect(()=>{
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('age'))
    setId(localStorage.getItem('id'))
      
  },[])


    return (<Component>
        <InputText
          type="text"
          placeholder="Enter your Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          type="text"
          placeholder="Enter your Age"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <SubmitButton
          type="submit"
          onClick={(e) => handleSubmit(e)}
          style={{ marginTop: "20px" }}
        >
          Update
        </SubmitButton>
      </Component>
    );
}

export default Edit;