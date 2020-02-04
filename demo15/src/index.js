import React,{ Component } from 'react';
import ReactDom from 'react-dom';
class App extends Component {
    render() {
        return (
            <div>
                this is home page
                <br />
                <a href="/list">list</a>
            </div>
        )
    }
};

ReactDom.render(
    <App />,
    document.getElementById('app')
)
