import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeRoleAction } from "../../redux/actions/users";
import { getUsersAction } from '../../redux/actions/users';

const ChangeRole = ({ user }) => {
  // const roles = { "1": "user", "2": "admin"}

  const roles = [
    { id: "1", name: "user" },
    { id: "2", name: "admin" },
  ];
  const [refresh, setRefresh] = useState(false);
  const [userRoleId, setUserRoleId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange =  async (e) => {
    setUserRoleId(e.target.value) 
     setRefresh(true)
//      .then(() =>
//      {userRoleId == 1 ? (
//           navigate("/admins")
//        ):(
//          navigate("/users") 
//        )       
//  })
//  .catch((e) => console.error(e));

  };
//   const handleLogin = async (e) => {
//     await dispatch(signinAction(userData))
//       .then(() => navigate("/"))
//       .catch((e) => console.error(e));
//   };

const handleChangeRole = async (e) => {
    userRoleId && await dispatch(changeRoleAction({ userRoleId, user }))
    .then(() =>
    {userRoleId == 2 ? (
         navigate("/admins")
      ):(
        navigate("/users")
      )     
})
.catch((e) => console.error(e));
  };
  useEffect( ()  => {
    handleChangeRole();
}, [refresh])
//   useEffect( ()  => {
//     userRoleId && dispatch(changeRoleAction({ userRoleId, user }));
//   }, [refresh]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//         await dispatch(getUsersAction());
//     }
//     fetchUsers();
// }, [userRoleId]);

  return (
    <>
      <Box sx={{ minWidth: 90 }}>
        <FormControl fullWidth>
          <InputLabel id="change-role">Change</InputLabel>
          <Select
            labelId="change-role"
            id="change-role"
            value={ user.userRoleId }
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value={roles[0].id}>{roles[0].name}</MenuItem>
            <MenuItem value={roles[1].id}>{roles[1].name}</MenuItem>
          </Select>
        </FormControl>
      </Box>{" "}
    </>
  );
};

export default ChangeRole;
