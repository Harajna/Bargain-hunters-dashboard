import {

    GET_REPORTS,
    //ADD_REPORT,
    DELETE_REPORT,
    GET_REPORTSDATES
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";


export const getReportsAction = (reportData) => async (dispatch) => {
    let data = {
        url: API_URLS().REPORTS.GET_REPORTS,
    };
    console.log(data);
    await requestApi(data)
        .then((res) => {
            dispatch({ type: GET_REPORTS, payload: res?.data });
            return res?.data

        })
};

export const getReportsDatesAction = () => async (dispatch) => {
    let data = {
      url: API_URLS().REPORTS.GET_REPORTSDATES,
    };
    await requestApi(data).then((res) => {
      dispatch({ type: GET_REPORTSDATES, payload: res?.data });
      return res?.data
    })
  };

export const deleteReportsAction = (reportData) => async (dispatch) => {
    let data = {
        url: API_URLS(reportData).REPORTS.DELETE_REPORT,
        method: "DELETE",
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: DELETE_REPORT, payload: res.data });
            return res?.data
        })
};




// export const changeRoleAction = (categoryData) => async (dispatch) => {
//     console.log("IN CHANGE ROLE ACTION, categoryData: ", categoryData)
//     let data = {
//         url: API_URLS(categoryData.user.id).ADMINS.CHANGE_ROLE,
//         method: "PATCH",
//         body: {
//             role: categoryData.role
//         },
//     };
//     await requestApi(data)
//         .then((res) => {
//             if (categoryData.role == "user")
//                 dispatch({ type: DELETE_ADMIN, payload: { adminId: categoryData.user.id } });
//             else {
//                 dispatch({ type: DELETE_USER, payload: { userId: categoryData.user.id } });
//             }
//         })
//         .catch(e => {
//             console.log("CHANGE ROLE ERROR: ", e)
//         })
// };

// export const addCategoryAction = (categoryData) => async (dispatch) => {
//     let data = {
//         url: API_URLS().REPORTS.ADD_REPORT,
//         method: "POST",
//         body: {
//            ... categoryData
//         },
//     };
//     console.log(111111111);
//     await requestApi(data)
//         .then((res) => {
//             dispatch({
//                 type: ADD_REPORT, payload: res?.data
//                     // {...res?.data, username: categoryData.username, email: categoryData.email, roleId: 2, isActive: true}
                   
//             });
//         })
// };