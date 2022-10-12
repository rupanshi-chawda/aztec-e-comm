import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/Actions'
import CartTotal from './CartTotal'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                return(
                        <li className="collection-item avatar" key={item.id}>
                        <div className="item-img"> 
                            <img src={item.img} alt={item.img} className=""/>
                        </div>
                                
                        <div className="item-desc">
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p> 
                            <p><b>Quantity: {item.quantity}</b></p>

                            <div className="add-remove">
                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                            </div>
                            
                            <button className="waves-effect waves-light btn-floating btn-large teal light remove" onClick={()=>{this.handleRemove(item.id)}}>
                                <i class="material-icons">clear</i>
                            </button>
                        </div>
                        </li>
                         
                    )
                })
            ):

             (
                <p className="center"> Items not added!, check out some beautiful tribal designs at AZTEC. </p>
             )
             
       return(
            <div className="container">
                <div className="cart">
                    <h2 className="center">C A R T</h2>
                    <h5>Your Orders - </h5>
                    <ul className="collection">
                        {addedItems}
                   </ul>
                   <div>
                       
                   </div>
                </div> 
                <CartTotal />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)