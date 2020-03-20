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
        if (event.target.checked) {
            event.target.value = 'on';
            const targetVal = document.getElementById(event.target.id + 2).innerText;
            document.getElementById(event.target.id + 2).innerHTML = (`<s>` + targetVal + `</s>`)
        }
        else if (!event.target.checked) {
            event.target.value = 'off'
            document.getElementById(event.target.id + 2).innerText = event.target.id
            console.log(event.target.value)

        }
    }

    render() {
        return (
            <div className='mainDiv'>
                A simple to do list
                {/*<h3 className='header'>A simple to do list</h3>*/}
                <div className='inputDiv'>

                    <input className='inputField' type='text' onChange={this.handleInputChange} />
                    <p onClick={this.handleAddClick} className='button'>Add item to list</p>
                </div>
                <div className='items'>
                    {this.state.inputArr.map((item) =>
                        <div key={item} id={item + 1} className='itemBlock'>
                            <input type='checkbox' id={item} value='off' onClick={this.handleCheck} className='checkBox' />
                            <span id={item + 2} className='item'>{item}</span>
                            <span id={item} onClick={this.handleDelete} className='deleteItem'>  X  </span>
                        </div>)
                    }
                </div>


            </div>
        )
    }

}

export default Header