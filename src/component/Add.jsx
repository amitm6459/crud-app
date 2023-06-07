import React, { useState } from "react";
import Employess from "./Employess";
import { Form, useNavigate } from "react-router-dom";
import { Box, Button, TextField, styled } from "@mui/material";
import { v4 as uuid } from "uuid";

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

function Add(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    const a = name;
    const  b = age;

    Employess.push({ id: uniqueId, name: a, age: b });
    history("/");
  };

  return (
    <Component>
      <InputText
        type="text"
        placeholder="Enter your Name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <InputText
        type="text"
        placeholder="Enter your Age"
        required
        onChange={(e) => setAge(e.target.value)}
      />
      <SubmitButton
        type="submit"
        onClick={(e) => handleSubmit(e)}
        style={{ marginTop: "20px" }}
      >
        submit
      </SubmitButton>
    </Component>
  );
}

export default Add;
