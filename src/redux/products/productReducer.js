const initialState = {
  status:"idle",
  items:[],
  error:null
};
export default function productReducer(state=initialState,action){
    switch (action.type){
      case "products/fetchstart":
        return({
          ...state,status:"loading",error:null
        })
      case "products/fetchsucess":
        return({
          ...state,status:"sucess",items:action.payload
        })
      case "products/fetcheroor":
        return({
          ...state,status:"failed",error:action.payload
        })
        default:
            return state
    }
}
