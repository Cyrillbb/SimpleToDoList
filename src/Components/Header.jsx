import React, { Component } from 'react';
//import List from './Components/list'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            inputArr: [],
        }
    }

    handleAddClick = () => {
        if (this.state.inputArr.includes(this.state.input) == false) {
            this.state.inputArr.push(this.state.input);
            this.forceUpdate()
        }
    }
    handleInputChange = (event) => {
        this.setState({ input: event.target.value })
        console.log(this.state)
    }
    handleDelete = (event) => {
        this.setState({
            inputArr: this.state.inputArr.filter(item => item != event.target.id)
        })
        this.forceUpdate();
    }

    handleCheck = (event) => {
        this.setState={
            inputArr: this.state.inputArr.filter()
        }
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.handleInputChange} />
                <p onClick={this.handleAddClick} className='button'>Add item to list</p>

                {this.state.inputArr.map((item) =>
                <p key={item}>
                    <input type='checkbox' id={item} onCheck={this.handleCheck} /> 
                    {item}
                    <span id={item} onClick={this.handleDelete}>  X  </span>
                </p>)
                }

            </div>
        )
    }

}

export default Header