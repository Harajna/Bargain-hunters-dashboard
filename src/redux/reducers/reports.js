import { useDispatch, useSelector } from "react-redux";
import {
  GET_REPORTS,
  //ADD_REPORT,
  DELETE_REPORT,
  GET_REPORTSDATES
} from "../constants";


let initialState = {
  data: [],
  success: false,
  messages: ''
};

const reportsReducer = (state = initialState, action) => {
  const { success, messages, data, reportId = null } = action?.payload || {};
  switch (action.type) {
    case GET_REPORTS:
      console.log("in GET_REPORTS: success, messages, data: ", success, messages, data)
      return {
        ...state,
        data: [
          ...data
        ],
        success: true,
        messages
      };

    case DELETE_REPORT:
      return {
        ...state,
        data:[
          ...data
        ],
        messages
      };
      case GET_REPORTSDATES:
    console.log("in GET_USERSDATES: success, messages, data: ", success, messages, data)
    return {
      ...state,
      dates: [
        ...data
      ],
      success: true,
      messages
    };
    default:
      return state;
  }
};

export default reportsReducer;
