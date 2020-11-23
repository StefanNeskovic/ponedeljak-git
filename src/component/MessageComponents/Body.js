const { Component } = require("react");

class Body extends Component{


    render(){
        return(
            <div>
                <h5><i>{this.props.text}</i></h5>
            </div>
        )
    }

}

export default Body;