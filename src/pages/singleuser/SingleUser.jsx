import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { deleteAdminAction } from "../../redux/actions/admins";
import {
  deleteUserAction,
  deleteUserLinkAction,
  getUserAction,
  getUserLinksAction,
  getUsersAction,
} from "../../redux/actions/users";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import ButtonGroup from "@mui/material/ButtonGroup";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
import SingleUserItems from "./SingleUserItems";
import "./singleuser.scss";
const roles = {
  1: "User",
  2: "Admin",
  3: "SuperAdmin",
};

const SingleUser = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const state = useSelector((state) => state);
  let user =
    state.users.data.find((user) => user.id == userId) ||
    state.admins.data.find((admin) => admin.id == userId) ||
    null;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      !user && (await dispatch(getUsersAction()));
      await dispatch(getUserAction(userId));
    };
    fetchUsers();
  }, []);

  const dispatchDeleteUser = async (user) => {
    await dispatch(deleteUserAction(user));
    setOpen(false);
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {user ? (
          <div>
            <div
              className='m-6'
              id="hammoud"
            >
              <div>
                <img
                  src={user?.user_info?.profilePic}
                  style={{ width: "12em", height: "auto", borderRadius: "30%" }}
                />
              </div>
              <div className=" info">
                <p>
                  <b>Full Name:</b> {user?.user_info?.fullName}
                </p>
                <p>
                  <b>Email: </b> 
                  <a href={`mailto:${user?.email}`}> {user?.email}</a>
                </p>
                <p>
                  <b>Tel:</b> {user?.user_info?.tel}
                </p>
                <p>
                  <b>Adress:</b> {user?.user_info?.address}
                </p>

                <p>
                  <b>Role:</b> {roles[user?.userRoleId]}
                </p>
              </div>
            </div>
            <div className="deleteBtn">
              <Button
                color="error"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={handleClickOpen}
              >
                Delete User
              </Button>
            </div>

            <div className="d-flex bg-info w-50">
              <div className="flex w-50 bg-info justify-content-center">
                <div className="d-flex">
                  {/* <h1 className='m-5 text-center'>User Id: {user?.id}</h1> */}
                  <div className=" justify-content-center align-items-end m-12 "></div>
                </div>
              </div>
            </div>

            <div></div>
            <SingleUserItems />

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              maxWidth="sm"
              fullWidth={true}
            >
              <DialogTitle id="alert-dialog-title" className="text-center">
                {"Are you sure you want to delete this user?"}
              </DialogTitle>
              <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  color="primary"
                  variant="outlined"
                  startIcon={<CancelIcon />}
                  onClick={handleClose}
                  autoFocus
                >
                  Cancel
                </Button>
                <Button
                  color="error"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => dispatchDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        ) : (
          <p>User does not exist</p>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
