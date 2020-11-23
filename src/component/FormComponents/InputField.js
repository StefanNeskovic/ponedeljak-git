const { Component } = require("react");


class InputField extends Component{
    
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }

    onChangeHandler(event){
        this.setState({text:event.target.value})
        this.props.changeEvent(this.state.text)
    }

    render(){
        return(
            <div>
                <label> {this.props.text} : </label>
                <input type='text' value={this.state.text} onChange={this.onChangeHandler.bind(this)}/>
            </div>
        )
    }

}

export default InputField;