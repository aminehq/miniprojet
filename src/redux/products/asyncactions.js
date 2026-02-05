export const fetchproducts=()=>{
    return async (dispatch,getstate)=>{
        dispatch({type : "products/fetchstart"})
        try {
            const response=await fetch("https://dummyjson.com/products")
            if(!response.ok){
                throw new Error("loading echec")
            }
            const data=await response.json()
            dispatch({type:"products/fetchsucess",payload:data.products})
        } catch (error) {
            dispatch({type:"products/fetcherror",payload:error.message})
        }
    }
}