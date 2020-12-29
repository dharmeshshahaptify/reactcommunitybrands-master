import React from 'react';
// useSelector: subscribe to the store
// useDispacth: Disdpatch the action
import {useSelector, useDispatch} from 'react-redux';
import AddProductComponent from './views/addproductcomponent';
import ListProductComponent from './views/listproductcomponent';
import addProduct from './actions/action';


const MainComponent=()=>{

    // read products from the store which is monitiored and manilulated by reducer
    let products = useSelector(state=>state.listproductreducer);

    let selectedproduct = useSelector(state=>state.selectProductReducer);

    // initialize the dispatcher object
    let dispatch = useDispatch(); 


    return(
        <div className="container">
          <h2>The Redux with Fucntional Components</h2>
          {/* Dispatch the action and pass its reference to the AddProductComponent */}
          <AddProductComponent AddClick={(product)=>dispatch(addProduct(product))} selectproduct={selectedproduct} />
          <hr/>
          {/* pass the products from the store to the ListProductComponent    selectProduct={()=>dispatch(selectProduct(product))}*/}
          <ListProductComponent listProducts={products}  />
        </div>
    );
};

export default  MainComponent;
