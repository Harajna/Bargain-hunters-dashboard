const API_ROOT = process.env.REACT_APP_API_URL;
console.log("API_URL = ", API_ROOT);

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    SIGNIN: API_ROOT + "/users/admin/login/",
    LOGOUT: API_ROOT + "/users/logout/",
  },
  USERS: {
    GET_USERS: API_ROOT + "/users/admin/users",
    GET_USERSDATES: API_ROOT + "/users/admin/users", 
    GET_USER: API_ROOT + "/users/profile/" + extraData,
    CHANGE_ROLE: API_ROOT + "/users/role/" + extraData,
    GET_USERLINKS: API_ROOT + "/admins/users/" + extraData + "/links", //get all links from user
    DELETE_USER: API_ROOT + "/users/blockuser/",
    DELETE_LINK: API_ROOT + "/admins/links/" + extraData,
    // CHANGE_ROLE: API_ROOT + "/users/role/" + extraData,


  },
  // ADMINS: {
  //   GET_CATEGORIES: API_ROOT + "/admins/", 
  //   ADD_CATEGORY: API_ROOT + "/superadmins/createadmin",
  //   DELETE_CATEGORY: API_ROOT + "/superadmins/delete/" + extraData,
  //   CHANGE_ROLE: API_ROOT + "/superadmins/users/" + extraData,
  // },
  CATEGORIES: {
    GET_CATEGORIES: API_ROOT + "/items/categories/",
    ADD_CATEGORY: API_ROOT + "/items/addcategory/",
    DELETE_CATEGORY: API_ROOT + "/items/categories/" + extraData,
  },
  ITEMS: {
    GET_ITEMS: API_ROOT + "/items/",
    GET_ITEM: API_ROOT + "/items/item/" + extraData,
    GET_ITEMS_BY_USERID: API_ROOT + "/items/item/user/"+ extraData,
    GET_ITEMSDATES: API_ROOT + "/items/",

    //ADD_ITEMS: API_ROOT + "/items/addcategory/",
    DELETE_ITEMS: API_ROOT + "/items/item/admin/" + extraData,
  },
  REPORTS: {
    GET_REPORTS: API_ROOT + "/report/reporteditems/",
    DELETE_REPORT: API_ROOT + "/report/delete/" + extraData,
    //DELETE_REPORTS: API_ROOT + "/report/delete/" + extraData,
    GET_REPORTSDATES: API_ROOT + "/report/reporteditems/",
    
  },
  LINKTYPES: {
    GET_LINKTYPES: API_ROOT + "/admins/linktypes/",
    ADD_LINKTYPE: API_ROOT + "/admins/linktypes/",
    EDIT_LINKTYPE: API_ROOT + "/admins/linktypes/" + extraData,
    EDIT_LINKICON: API_ROOT + "/admins/linksicon/" + extraData,
  },
});

export default API_URLS;
