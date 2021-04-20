import React, { createContext, useReducer } from "react";
import { fromJS } from "immutable";

//context
export const CategoryDataContext = createContext({});
// action type 常量声明
export const CHANGE_CATEGORY = "sings/CHANGE_CATEGORY";
export const CHANGE_ALPHA = "sings/CHANGE_ALPHA";

//reducer
const reducer = (
  state: { set: (arg0: string, arg1: any) => any },
  action: { type: string; data: any }
) => {
  console.log(state,action)
  switch (action.type) {
    case CHANGE_CATEGORY:
      return state.set("category", action.data);
    case CHANGE_ALPHA:
      return state.set("alpha", action.data);
    default:
      return state;
  }
};
//Provider 组件
export const Data = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  //useReducer的第二个参数中传入初始值
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      category: { name: "", key: "", type: "type" },
      alpha: "",
    })
  );
  return (
    <CategoryDataContext.Provider
      value={{
        data, dispatch
      }}>
      {props.children}
    </CategoryDataContext.Provider>)
};
