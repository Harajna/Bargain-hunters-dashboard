import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import * as React from "react";
import "./categories.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  addCategoryAction,
  getCategoriesAction,
  deleteCategoriesAction,
} from "../../redux/actions/categories";

import SingleUser from "../../pages/singleuser/SingleUser";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  const handleCreateCategoryAction = async (e) => {
    await dispatch(addCategoryAction({ name: newCategory })).catch((e) =>
      console.error(e)
    );
    setOpen(false);
  };

  const dispatchDeleteCategory = async (categoryData) => {
    await dispatch(deleteCategoriesAction(categoryData));
    setOpenDelete(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const fetchcategories = async () => {
    await dispatch(getCategoriesAction());
  };

  useEffect(() => {
    fetchcategories();
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Box
          sx={{
            backgroundColor: "#9162b8",
            marginTop: "30px",
            borderRadius: "20px",
          }}
          mx={10}
          mt={-3}
          py={2}
          px={60}
        >
          <Typography
            sx={{ flex: "1 1 50%" }}
            variant="h5"
            id="tableTitle"
            component="div"
            color="white"
          >
            Categories
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table
            aria-label="admins table"
            stickyHeader
            sx={{ width: "60em", margin: "auto" }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <h2>Name</h2>
                </TableCell>
                <TableCell>
                  <h2></h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow >
              {categories?.length ? (
                categories.map((Category, i) => (
                 
                    <TableCell key={i}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <h4>{Category.name}</h4>

                      <Button
                        color="error"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                          setCategoryId(Category.id);
                          handleClickOpenDelete();
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                 
                ))
              ) : (
                <TableCell>
                  <Typography align="center">No categories currently</Typography>
                </TableCell>
              )}
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="buttunCreate">
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{ margin: "2em", backgroundColor: "#1f8d20" }}
          >
            Add New Category
          </Button>
        </div>

      </div>
      <Dialog
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title" className="text-center">
          {"Are you sure you want to delete this category?"}
        </DialogTitle>

        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            color="primary"
            variant="outlined"
            startIcon={<CancelIcon />}
            onClick={() => {
              setCategoryId(0);
              handleCloseDelete();
            }}
            autoFocus
          >
            Cancel
          </Button>
          <Button
            color="error"
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => dispatchDeleteCategory(categoryId)}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
 
      <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>Add a New Category</DialogTitle>
          <DialogContent>
            <Stack spacing={3} initial={{ opacity: 0, y: 40 }}>
              <TextField
                fullWidth
                type="string"
                label="Category Name"
                name="type"
                onChange={(e) => {
                  setNewCategory(e.target.value);
                }}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleCreateCategoryAction}>Add</Button>
          </DialogActions>
        </Dialog>
    </div>
  );
};

export default Categories;
