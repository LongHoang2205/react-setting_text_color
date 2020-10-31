import React,{Component} from 'react';

class Reset extends Component {
  constructor(props){
    super(props);
    }
    onReset=()=>{
      this.props.onReset(true);
    }
  render(){ 
  return (
          <button type="button" className="btn btn-info" onClick={()=>this.onReset()}>reset</button>
      );
}
}

export default Reset