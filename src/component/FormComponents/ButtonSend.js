const { Component } = require("react");


class InputField extends Component{
    
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }

    onClickHandler(event){
        this.props.sendEvent()
        this.setState({text:''})
    }

    render(){
        return(
            <div>
                <button onClick={this.onClickHandler.bind(this)}>Send</button>
            </div>
        )
    }

}

export default InputField;