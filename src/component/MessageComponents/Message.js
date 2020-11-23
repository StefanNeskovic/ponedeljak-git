import './Message.css'
import Subject from './Subject'
import Body from './Body'
const { Component } = require("react");

class Message extends Component {


    render() {
        return (
            <div >
                {(this.props.stateObj.subjectText == '' && this.props.stateObj.bodyText == '') ?
                    (<div className='message-div'>
                        <h3>No data!</h3>
                    </div>)
                    :
                    (<div className='message-div'>
                    <Subject text={this.props.stateObj.subjectText} />
                    <hr />
                    <Body text={this.props.stateObj.bodyText} />
                    </div>)
                }

            </div>

        )
    }

}

export default Message;