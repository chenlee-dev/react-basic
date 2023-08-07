import React from 'react';
import ChildComponent from './ChildComponents';

class MyComponent extends React.Component {
    
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'Job-1', title: 'nails-tech', salary: '400'},
            { id: 'Job-2', title: 'tester', salary: '700'},
            { id: 'Job-3', title: 'dev-tech', salary: '900'},

        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check data >> : ', this.state)
    }
    render() {
        console.log('>> Call Render: ', this.state)
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange = {(event) => this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange = {(event) => this.handleChangeLastName(event)}
                    />
                    <br/><br/>
                    <input 
                        type="button" 
                        value="Submit"
                        onClick = {(event) => this.handleSubmit(event)}
                    />
                </form> 
                <ChildComponent 
                    name = {this.state.firstName} 
                    age = {"27"} 
                    months = {"8"}
                    address = {' Brampton '}
                    arrJobs = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;