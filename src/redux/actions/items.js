import {

    GET_ITEMS,
    GET_ITEM,
    //ADD_ITEMS,
    DELETE_ITEMS,
    GET_ITEMS_BY_USERID,
    GET_ITEMSDATES
   
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";

export const getItemsAction = (itemData) => async (dispatch) => {
    let data = {
        url: API_URLS().ITEMS.GET_ITEMS,
    };
    console.log(data);
    await requestApi(data)
        .then((res) => {
            dispatch({ type: GET_ITEMS, payload: res?.data });
            return res?.data

        })
};

export const getItemAction = (id) => async (dispatch) => {
    let data = {
      url: API_URLS(id).ITEMS.GET_ITEM,
    };
    await requestApi(data)
    .then((res) => {
        dispatch({ type: GET_ITEM, payload: res?.data });
        return res?.data

    })
  };

  //GET_ITEMS_BY_USERID
  export const getItemByUserIdAction = (userId) => async (dispatch) => {
    let data = {
      url: API_URLS(userId).ITEMS.GET_ITEMS_BY_USERID,
    };
    console.log("dataofitems", data);
    await requestApi(data)
    .then((res) => {
        dispatch({ type: GET_ITEMS_BY_USERID, payload: res?.data });
        return res?.data

    })
  };

export const deleteItemsAction = (itemData) => async (dispatch) => {
    let data = {
        url: API_URLS(itemData).ITEMS.DELETE_ITEMS,
        method: "DELETE",
        // body: {
        //     ...itemData,
        // },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: DELETE_ITEMS, payload: res?.data });
        })
};
export const getItemsDatesAction = () => async (dispatch) => {
    let data = {
      url: API_URLS().ITEMS.GET_ITEMSDATES,
    };
    await requestApi(data).then((res) => {
      dispatch({ type: GET_ITEMSDATES, payload: res?.data });
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
//         url: API_URLS().CATEGORIES.ADD_CATEGORY,
//         method: "POST",
//         body: {
//            ... categoryData
//         },
//     };
//     console.log(111111111);
//     await requestApi(data)
//         .then((res) => {
//             dispatch({
//                 type: ADD_CATEGORY, payload: res?.data
//                     // {...res?.data, username: categoryData.username, email: categoryData.email, roleId: 2, isActive: true}
                   
//             });
//         })
// };