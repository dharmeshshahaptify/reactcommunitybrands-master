import React  from 'react';

import { useDispatch} from 'react-redux';
import selectProduct from './../actions/selectaction';

const ListProductComponent=(props)=>{

    let dispatch = useDispatch(); 





    //const event=(prd) => props.selectProduct(prd); 

    if(props.listProducts === undefined || props.listProducts.length === 0) {
        return (<div>No Record Found</div>)
    } else {
        return(
            <table className="table table-bordered table-striped table-dark">
                <thead>
                    <tr>
                        <td>Product Id</td>
                        <td>Product Name</td>
                    </tr>
                </thead>
                <tbody>
                  {
                      props.listProducts.map((prd,idx)=>(
                        <tr key={idx} onClick={()=>dispatch(selectProduct(prd.product))} >
                          <td>
                          {prd.product.ProductId}
                          </td>
                          <td>
                          {prd.product.ProductName}</td>
                        </tr>
                      ))
                  }
                </tbody>
            </table>
        );
    }
};

export default ListProductComponent;
