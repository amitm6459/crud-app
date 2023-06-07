import React from "react";
import Employess from "./Employess";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CreateButton =styled(Button)`
width:150px;
justify-conten:center;
`

function Home(props) {
  let history = useNavigate();

   const handelEdit=(id,name,age)=>{
      localStorage.setItem("Name",name)
      localStorage.setItem("age",age)
      localStorage.setItem("id",id)
   }

  const handelDelete = (id) => {
    var index = Employess.map((e) => {
      return e.id;
    }).indexOf(id);

    Employess.splice(index, 1);

    history("/");
  };
  return (
    <>
      <div style={{ margin: "160px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">ID</TableCell>
              <TableCell component="th">Name</TableCell>
              <TableCell component="th">Age</TableCell>
              <TableCell component="th">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Employess && Employess.length > 0
              ? Employess.map((item) => {
                  return (
                    <TableRow>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.age}</TableCell>
                      <TableCell>
                        <Link to={"/edit"}>20
                          <Button onClick={() => handelEdit(item.id,item.name,item.age)}>EDIT</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handelDelete(item.id)}>
                          DELETE
                        </Button>
                        &nbsp;
                      </TableCell>
                    </TableRow>
                  );
                })
              : "No Data available"}
          </TableBody>
        </Table>
        <br />
        <div>
        <Link to="/Create">
          <Button style={{ width: "" }}>Create</Button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
