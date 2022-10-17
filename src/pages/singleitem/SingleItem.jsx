// import React from "react";
// import Navbar from "../../components/navbar/Navbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./singleitem.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Slider from '@mui/material/Slider';
// import { Button } from "@mui/material";
//  import SimpleImageSlider from "react-simple-image-slider";
//  import PlaceIcon from '@mui/icons-material/Place';
//  import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import { deleteAdminAction } from "../../redux/actions/admins";
// import {
//   getItemsAction,
//   getItemAction,
//   deleteItemsAction,
// } from "../../redux/actions/items";
// import { useState, useEffect } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Box, Typography } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
// import {
//   deleteUserAction,
//   deleteUserLinkAction,
//   getUserAction,
//   getUserLinksAction,
//   getUsersAction,
// } from "../../redux/actions/users";
// import { Link } from "react-router-dom";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// // const roles = {
// //     "1": "SuperAdmin",
// //     "2": "Admin",
// //     "3": "User"
// // }

// const SingleItem = () => {
//   // const [emblaRef] = useEmblaCarousel()
//   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
//   //const [itemId, setItemId] = useState(0);
//   const dispatch = useDispatch();
//   const { itemId } = useParams();
//   // const { userId } = useParams();
//   console.log(itemId);
//   const state = useSelector((state) => state);
//   let item = state.items.data.find((item) => item.id == itemId) || null;
//   let userId = item?.userId;

//   let user = state.users.data.find((user) => user.id == userId) || null;
//   console.log("33333333", user);

//   console.log("33333333", item);
//   const [open, setOpen] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleClickOpenDelete = () => {
//     setOpenDelete(true);
//   };
//   const handleCloseDelete = () => {
//     setOpenDelete(false);
//   };
//   useEffect(() => {
//     const fetchUsers = async () => {
//       !user && (await dispatch(getUsersAction()));
//       await dispatch(getUserAction(userId));
//     };
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     const fetchitems = async () => {
//       !item && (await dispatch(getItemsAction()));
//       await dispatch(getItemAction(itemId));
//     };
//     fetchitems();
//   }, []);

//   const dispatchDeleteItem = async (item) => {
//     await dispatch(deleteItemsAction(item));
//     setOpen(false);
//   };

//   return (
//     <div className="list">
//       <Sidebar />
//       <div className="listContainer">
//         <Navbar />
//         {item ? (
//           <div>
//             <div className=" m-4 card w-25 p-2" style={{ background: "#aeea" }}>
//               <h3 className="text-center">Seller Info </h3>
//               <Link className="text-center flex " to={`/users/profile/${item?.userId}`}>
//                 <img
//                   className="m-2 p-3"
//                   src={user?.user_info?.profilePic}
//                   style={{ width: "6em", height: "auto", borderRadius: "70%" }}
//                 />
//                 <div className="text-center">{user?.user_info?.fullName} <br></br>
//                  {<RemoveRedEyeIcon/>} </div>
//               </Link>
//               <p className="text-center">
//                 < PlaceIcon />{user?.user_info?.address}</p>
//             </div>
//             <div className="d-flex justify-content-center align-items-end m-5">
//               <div className="d-flex align-items-end gap-5">

//                 <img
//                   src={item?.url||  "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id936182806?k=20&m=936182806&s=612x612&w=0&h=pTQbzaZhCTxWEDhnJlCS2gj65S926ABahbFCy5Np0jg=" }
//                   style={{ width: "15em", height: "auto" , borderRadius:"30%"}}

//                 />

//                 <div className="d-flex flex-column">
//                   <p>
//                     <b>Title:</b> {item?.title}
//                   </p>
//                   <p>
//                     <b>Category:</b> {item?.category?.name}
//                   </p>
//                   <p>
//                     <b>Description:</b> {item?.description}
//                   </p>
//                   <p>
//                     <b>Price:</b> {item?.price}$
//                   </p>
//                   <p>
//                     <b>Tel:</b> {item?.tel}
//                   </p>
//                   <p>
//                     <b>Adress:</b> {item?.location}
//                   </p>
//                 </div>
//               </div>

//               <TableCell align="right">
//                         <Button
//                           color="error"
//                           variant="outlined"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => {
//                            // setItemId(item.id);
//                             handleClickOpenDelete();
//                           }}
//                         >
//                           Delete Item
//                         </Button>
//                         <Dialog
//                           open={openDelete}
//                           onClose={handleClose}
//                           aria-labelledby="alert-dialog-title"
//                           aria-describedby="alert-dialog-description"
//                           maxWidth="sm"
//                           fullWidth={true}
//                         >
//                           <DialogTitle
//                             id="alert-dialog-title"
//                             className="text-center"
//                           >
//                             {"Are you sure you want to delete this Item?"}
//                           </DialogTitle>
//                           <DialogActions
//                             sx={{ display: "flex", justifyContent: "center" }}
//                           >
//                             <Button
//                               color="primary"
//                               variant="outlined"
//                               startIcon={<CancelIcon />}
//                               onClick={handleCloseDelete}
//                               autoFocus
//                             >
//                               Cancel
//                             </Button>
//                             <Button
//                               color="error"
//                               variant="outlined"
//                               startIcon={<DeleteIcon />}
//                               onClick={() => {
//                                 dispatchDeleteItem(itemId);
//                                 // setOpenDelete(false)
//                               }}
//                             >
//                               Delete
//                             </Button>
//                           </DialogActions>
//                         </Dialog>
//                       </TableCell>
//             </div>
//                   {item.pictures && item.pictures ? (
//               item.pictures.map((pic, i) => (
//                 <>
//                   <div key={i} className="photos">
//                     <img
//                       src={pic?.url}
//                       style={{ width: "5em", height: "auto" }}
//                     />
//                   </div>
//                 </>
//               ))
//             ) : (
//               <p>nopic</p>
//             )}

//             <div className="embla" ref={emblaRef}>
//               <div className="embla__container">
//                 <div className="embla__slide">

//                     <img
//                     //   className="embla__slide__img"
//                     style={{ width: "5em", height: "auto" }}
//                       src={
//                         "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//                       }
//                       alt="A cool cat."
//                     />
//                      </div>
//                     <div className="embla__slide">
//                     <img
//                     //   className="embla__slide__img"
//                     style={{ width: "5em", height: "auto" }}
//                       src={
//                         "https://firebasestorage.googleapis.com/v0/b/global-menu-e4622.appspot.com/o/UserProfileImages%2FME%20-%20Copy%25%251664654063607.jpg?alt=media&token=bf7e68cf-02f1-4ec0-a66b-c1ef98cfa26ag"
//                       }
//                       alt="A cool cat."
//                     />
//                      </div>
//                     <div className="embla__slide">
//                     <img
//                     //   className="embla__slide__img"
//                     style={{ width: "5em", height: "auto" }}
//                       src={
//                         "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//                       }
//                       alt="A cool cat."
//                     />
//                   </div>
//                 </div>
//               </div>

//           </div>
//         ) : (
//           <p>Item does not exist</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SingleItem;

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import "./singleitem.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import PlaceIcon from "@mui/icons-material/Place";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CancelIcon from "@mui/icons-material/Cancel";
import Sidebar from "../../components/sidebar/Sidebar";

import {
  getReportsAction,
  deleteReportsAction,
} from "../../redux/actions/reports";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import {
  getItemsAction,
  getItemAction,
  deleteItemsAction,
} from "../../redux/actions/items";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import moment from "moment";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { getUserAction, getUsersAction } from "../../redux/actions/users";
import { reportItemAction } from "../../redux/actions/reports";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import ReportIcon from "@mui/icons-material/Report";
import "@splidejs/react-splide/css";

const SingleItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [newReport, setNewReport] = useState("");
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const state = useSelector((state) => state);
  const reports = useSelector((state) => state.reports.data);

  let item = state.items.data.find((item) => item.id == itemId) || null;
  let userId = item?.userId;
  let user = state.users.data.find((user) => user.id == userId) || null;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const fetchUsers = async () => {
    !user && (await dispatch(getUsersAction()));
    await dispatch(getUserAction(userId));
  };

  const fetchitems = async () => {
    !item && (await dispatch(getItemsAction()));
    await dispatch(getItemAction(itemId));
  };

  // useEffect(() => {
  //   userId && fetchUsers();
  // }, [userId]);
  useEffect(() => {
    fetchitems();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  const dispatchDeleteItem = async (item) => {
    await dispatch(deleteItemsAction(item))
      // setOpenDelete(false)
      .then(() => navigate("/reports"));
  };

  useEffect(() => {
    dispatchDeleteItem();
  }, []);

  // const dispatchDeleteReport = async (reportData) => {
  //   await dispatch(deleteReportsAction(reportData));
  //   console.log(reportId);
  //   setOpenDelete(false);
  // };

  // .then(() => navigate("/reports"))
  console.log(item);

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />

          <div className="list1">
            <div className="list-Container">
              <div className="item">
                <div className="item-pic">
                  {item?.pictures && item?.pictures.length > 0 ? (
                    <Splide className="splide__list">
                      {item?.pictures?.map((pic, i) => (
                        <SplideSlide className="splide__slide" key={i}>
                          <img src={pic.url} className="card-image" />
                        </SplideSlide>
                      ))}
                    </Splide>
                  ) : (
                    <Splide className="splide__list">
                      <SplideSlide className="splide__slide">
                        <img
                          src={
                            "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id936182806?k=20&m=936182806&s=612x612&w=0&h=pTQbzaZhCTxWEDhnJlCS2gj65S926ABahbFCy5Np0jg="
                          }
                          className="card-image"
                        />
                      </SplideSlide>
                    </Splide>
                  )}
                </div>
                <div className="all-details">
                  <div className="seller-info">
                    <h3 className="header">{item?.title}</h3>
                    <Link
                      className="link"
                      to={`/users/profile/${item?.userId}`}
                    >
                      <img
                        src={user?.user_info?.profilePic}
                        style={{
                          width: "4em",
                          height: "4em",
                          marginBottom: "10px",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="name">
                        {user?.user_info?.fullName} <br></br>
                        {<RemoveRedEyeIcon />}{" "}
                      </div>
                    </Link>
                    <p className="location">
                      <PlaceIcon />

                      {user?.user_info?.address}
                    </p>
                  </div>
                  <div className="item-info ">
                    <p>
                      <b>Category:</b> {item?.category?.name}
                    </p>
                    <p>
                      <b>Description:</b> {item?.description}
                    </p>
                    <p>
                      <b>Price:</b> {item?.price}$
                    </p>
                    <p>
                      <b>Tel:</b> {item?.tel}
                    </p>
                    <p>
                      <b>Adress:</b> {item?.location}
                    </p>
                    <p>
                      <b>publishing date: </b>
                      {moment(`${item?.createdAt}`).format("llll")}{" "}
                    </p>
                  </div>

                  <div className="item-button">
                    <Button
                      color="error"
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        // setItemId(item.id);
                        handleClickOpenDelete();
                      }}
                    >
                      Delete Item
                    </Button>
                  </div>
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
                  {"Are you sure you want to delete this Item?"}
                </DialogTitle>
                <DialogActions
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    color="primary"
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={handleCloseDelete}
                    autoFocus
                  >
                    Cancel
                  </Button>
                  <Button
                    color="error"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      dispatchDeleteItem(itemId);
                      // .then(() => navigate("/reports"))
                      // setOpenDelete(false)
                    }}
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
