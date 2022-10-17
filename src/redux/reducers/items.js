import { Identity } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import {

  GET_ITEMS,
  GET_ITEM,
  //ADD_ITEMS,
  DELETE_ITEMS,
  GET_ITEMS_BY_USERID,
  GET_ITEMSDATES

} from "../constants";


let initialState = {
  data: [],
  success: false,
  messages: ''
};

const itemsReducer = (state = initialState, action) => {
  const { success, messages, data, id  } = action?.payload || {};
  switch (action.type) {
    case GET_ITEMS:
      console.log("in GET_ITEMS: success, messages, data: ", success, messages, data)
      return {
        ...state,
        data: [
          ...data
        ],
        success: true,
        messages
      };
      case GET_ITEM:
        console.log("in GET_ITEM: success, messages, data: ", success, messages, data)
        //const tempIndex = state.data.map(user => user.userId == data.id)
        const tempIndex = state.data.map(item => item.id == data.id)
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
        case GET_ITEMS_BY_USERID:
          // console.log("in GET_ITEM_BY_USERID: success, messages, data: ", success, messages, data)
          // //const tempIndex = state.data.map(user => user.userId == data.id)
          // const tempIndex1 = state.data.findIndex(item => item.id == data.userId)
          // let tempArray1 = [...state.data];
          // console.log("tempIndex: ", tempIndex1)
          // if (tempIndex1 == -1) {
          //   tempArray1.push(data)
          // }
          return {
            ...state,
            // data: tempArray1,
            data:[
              action.payload.data
            ],
            success: true,
            messages
          };
          case GET_ITEMSDATES:
            console.log("in GET_ITEMSDATES: success, messages, data: ", success, messages, data)
            return {
              ...state,
              dates: [
                ...data
              ],
              success: true,
              messages
            };

case "DELETE_ITEMS":
  //let id = action.payload
  //console.log(id, "removed id ")
      const temp = [state]

  const newArray = state.data.filter(item => item.id != id);
  console.log(newArray, "1111111")
  console.log(temp, "1111111state")

  return {
    ...state,
    data: [
      ...data
    ],
     // newArray,
      messages
  }


    default:
      return state;
  }
};

export default itemsReducer;
