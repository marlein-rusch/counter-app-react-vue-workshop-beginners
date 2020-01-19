import React, { Component } from 'react';
import Button from './components/Button';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
    resetCount = () => {
        this.setState({
            count: 0
        })
    }
    
    render() {
        let { count } = this.state
        return (
            <div className="container py-3"> 
                <div className="bg-light border-rounded-dark p-3">
                    <h2>Count: {count}</h2>
                    <Button
                        title={"-"}
                        task={() => this.decrementCount()}
                        />
                    <Button
                        title={"+"}
                        task={() => this.incrementCount()}
                        />
                    <Button
                        resetButton
                        title={"Reset"}
                        task={() => this.resetCount()}
                        />
                </div>
            </div>
        );
    }
}