// the 'product' is payload parameter send from UI 
const selectProduct=(product)=>{
    // any other logic here.....
    return {
        type: "SELECT_PRODUCT", /// --> the output action
        product /// ---> the output data from the action 
    }
};
export default selectProduct;