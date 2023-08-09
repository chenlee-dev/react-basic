import React from 'react';

    class AddComponent extends React.Component {
        
        state = {
            titleJob: '',
            salary: '',
        }
        handleChangeTitleJob = (event) => {
            this.setState({
                titleJob: event.target.value
            })
        }

    handleChangeSalary = (event) => {
            this.setState({
                salary: event.target.value
            })
        }
    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.titleJob || !this.state.salary){
            alert('Enter something')
            return;
        } 
        console.log('Check data input >> : ',this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            titleJob: this.state.titleJob,
            salary: this.state.salary
        });

        this.setState({
            titleJob: '',
            salary: ''
        })
    }

        render () {
            return (
                <form action="/action_page.php">
                    <label htmlFor="fname">Job Title:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.titleJob}
                        onChange = {(event) => this.handleChangeTitleJob(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.salary}
                        onChange = {(event) => this.handleChangeSalary(event)}
                    />
                    <br/><br/>
                    <input 
                        type="button" 
                        value="Submit"
                        onClick = {(event) => this.handleSubmit(event)}
                    />
                </form> 
            )
        }
}

export default AddComponent;