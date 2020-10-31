import React,{Component} from 'react';


class Product extends Component {
    constructor(props){
        super(props);
        //this.onAddToCart=this.onAddToCart.bind(this);
    }
    // onAddToCart(){
    //     alert(this.props.name);
    // }
     onAddToCart=()=>{
        alert(this.props.name);
    }
  render(){
  return (
    <div>
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
    	<div className="thumbnail">
    		<img alt={this.props.name} src={this.props.image}/>
    		<div className="caption" style={{textAlign:"center"}}>
    			<h3 >{this.props.name}</h3>
    			<p>
    				{this.props.price} VND
    			</p>
    			<p>
    			</p>
    		</div>
    		<center><button type="button" className="btn btn-primary" 
                onClick={this.onAddToCart}
            >
                Mua Hang</button></center>
    	</div>
    </div>
    </div>
    	
    

  );
}
}

export default Product;
