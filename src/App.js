import React, { Component } from 'react';

export default class App extends Component {
    // constructor

    // incrementCount method

    // decrementCount method

    // resetCount method

    // render

    render() {
        return (
            <div className="container py-3">
                <div className="bg-light border-rounded-dark p-3">
                    <h2>Count: we ain't got no count</h2>
                    <button>-</button>
                    <button>+</button>
                    <button>Reset</button>
                </div>
            </div>
        );
    }
}