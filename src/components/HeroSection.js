import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/Actions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <div className="card-title ct"><b> {item.title} </b></div>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light teal" 
                                onClick={()=>{this.handleClick(item.id)}}>
                                <i className="material-icons">add</i>
                            </span>
                    </div>

                    <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}₹</b></p>
                    </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h4 className="center"><i>TRENDING ITEMS</i></h4>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)