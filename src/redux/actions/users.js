import {
  TOGGLE_ACTIVITY,
  GET_USERS,
  GET_USERSDATES,
  GET_USER,
  GET_USERLINKS,
  DELETE_USER,
  DELETE_LINK,
  CHANGE_ROLE

} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";


export const getUsersAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().USERS.GET_USERS,
  };
  await requestApi(data).then((res) => {
    dispatch({ type: GET_USERS, payload: res?.data });
    return res?.data
  })
};

export const getUsersDatesAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().USERS.GET_USERSDATES,
  };
  await requestApi(data).then((res) => {
    dispatch({ type: GET_USERSDATES, payload: res?.data });
    return res?.data
  })
};

export const getUserAction = (id) => async (dispatch) => {

  let data = {
    url: API_URLS(id).USERS.GET_USER,
  };
  await requestApi(data).then((res) => {
    dispatch({ type: GET_USER, payload: res?.data });
    return res?.data
  })
};

export const toggleActivityAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS(userData?.id).USERS.TOGGLE_ACTIVITY,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: TOGGLE_ACTIVITY, payload: res?.data });
    })
};

export const getUserLinksAction = (id) => async (dispatch) => {
  let data = {
    url: API_URLS(id).USERS.GET_USERLINKS
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: GET_USERLINKS, payload: res?.data });
    })
};

export const deleteUserLinkAction = (userData, linkData) => async (dispatch) => {
  let data = {
    url: API_URLS(linkData?.id).USERS.DELETE_LINK,
    method: "DELETE",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: DELETE_LINK, payload: { userId: userData.id, linkId: linkData.id } });
    })
};

export const deleteUserAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().USERS.DELETE_USER,
    method: "PUT",
    body: {
      userId: userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: DELETE_USER, payload: res?.data});
    })
};


export const changeRoleAction = (userRole) => async (dispatch) => {
  console.log("IN CHANGE ROLE ACTION, userRoleData: ", userRole)

  let data = {
      url: API_URLS(userRole.user.id).USERS.CHANGE_ROLE,
      method: "PUT",
      body: userRole
      
  };
  console.log("userRoleData", userRole)
  await requestApi(data)
  .then((res) => {
  dispatch({ type: CHANGE_ROLE , payload: res?.data  }); 
  })
      .catch(e => {
          console.log("CHANGE ROLE ERROR: ", e)
      })
};