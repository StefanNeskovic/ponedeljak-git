const { Component } = require("react");

class Subject extends Component{


    render(){
        return(
            <div>
                <h3><i>{this.props.text}</i></h3>
            </div>
        )
    }

}

export default Subject;