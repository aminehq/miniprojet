export function allProduits(state) {
    return state
}
export function findProduitParId(state,id) {
    return state.find((el)=>el.id===id)
}
export function findProduitParcategory(state,category) {
    return state.filter((el)=>el.category=category)
}