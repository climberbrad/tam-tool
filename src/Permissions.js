import React, {Component} from 'react';

export default class Permissions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
        this.toggleContent = this.toggleContent.bind(this);
    }

    getHeight() {
        if (this.props.open) {
            return "2em"
        } else {
            return "0"
        }
    }

    toggleContent() {
        this.props.toggleOne(this.props.id)
    }

    render() {
        var style = {height: this.getHeight()}
        return (
            <div className={"section section" + this.props.id}>
                <div onClick={this.toggleContent} style={style} className="permissions">{this.props.permission}</div>
            </div>
        );
    }
}
