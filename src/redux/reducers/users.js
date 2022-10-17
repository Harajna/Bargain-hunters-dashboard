import {
  GET_USERS,
  GET_USER,
  DELETE_USER,
  TOGGLE_ACTIVITY,
  GET_USERLINKS,
  DELETE_LINK,
  GET_USERSDATES,
  CHANGE_ROLE
} from "../constants";

let initialState = {
  data: [],
  success: false,
  messages: ''
};

const usersReducer = (state = initialState, action) => {
  const { success, messages, data, userId = null } = action?.payload || {};
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: [
          ...data
        ],
        success: true,
        messages
      };
    case GET_USER:
      //const tempIndex = state.data.map(user => user.userId == data.id)
      const tempIndex = state.data.map(user => user.id == data.id)
      let tempArray = [...state.data];
      if (tempIndex == -1) {
        tempArray.push(data)
      }
      return {
        ...state,
        data: tempArray,
        success: true,
        messages
      };
    case GET_USERSDATES:
      console.log("in GET_USERSDATES: success, messages, data: ", success, messages, data)
      return {
        ...state,
        dates: [
          ...data
        ],
        success: true,
        messages
      };
    case TOGGLE_ACTIVITY:
      console.log("in TOGGLE_ACTIVITY: success, messages, data: ", success, messages, data)
      return {
        ...state,
        success,
        messages
      };
    case DELETE_USER:
      return {
        ...state,
        data:[
          ...data
        ],
        messages
      };
      case CHANGE_ROLE:
        // ...state
        return {
          
          success: action?.payload?.success,
          data: [
            ...state.data,
            action?.payload?.data
          ]
        };

    default:
      return state;
  }
};

export default usersReducer;
