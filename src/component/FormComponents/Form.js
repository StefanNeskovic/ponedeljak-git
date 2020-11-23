import './Form.css';
import InputField from './InputField';
import ButtonSend from './ButtonSend'
const { Component } = require("react");

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            body: ''
        }
    }


    changeEventSubject(text) {
        this.setState({ subject: text, body: this.state.body })
        this.props.bindForm(this.state)
    }

    changeEventBody(text) {
        this.setState({ subject: this.state.subject, body: text })
        this.props.bindForm(this.state)
    }

    clickEvent() {
        this.props.sendEvent()
    }

    render() {
        return (
            <form className='form-div'>
                <h3>Send message:</h3>
                <InputField text={this.props.state.subject} changeEvent={this.changeEventSubject.bind(this)} />
                <br />
                <InputField text={this.props.state.body} changeEvent={this.changeEventBody.bind(this)} />
                <br />
                <ButtonSend sendEvent={this.clickEvent.bind(this)} />
            </form>
        )
    }

}

export default Form;