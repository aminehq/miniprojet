export default function total(state){
    return state.price.reduce((acc,el)=>acc+el.price,0)
}