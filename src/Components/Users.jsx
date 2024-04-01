import React, { useState } from "react";

import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableBody,
  styled,
  Button,
} from "@mui/material";

const defaultObject = [
  {
    id: 101,
    name: "Surbhit",
    email: "surbhit.4zeracing@gmail.com",
    phone: 7007786689,
    salary: 22000,
    age: 25,
  },
];

const Component = styled(Box)`
  width: 80%;
  margin: 50px auto;
  & > h4 {
    margin-buttom: 20px;
  }
  & > div > table > thead {
    background-color: #000;
  }
  & > div > table > thead > tr > th {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  & > div > table > tbody > tr > td {
    font-size: 16px;
  }
`;

function Users() {
  const [users, SetUsers] = useState(defaultObject);

  const removeEntry = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    SetUsers(updatedUsers);
  };

  return (
    <Component>
      <Typography variant="h4"></Typography>
      <Component>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Remove Entry</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.salary}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeEntry(user.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Component>
    </Component>
  );
}

export default Users;
