export function allProduits(state) {
    return state.products.items
}
export function findProduitParId(state,id) {
    return state.products.items.find((el)=>el.id==id)
}
export function findProduitParcategory(state,category) {
    return state.products.items.filter((el)=>el.category==category)
}