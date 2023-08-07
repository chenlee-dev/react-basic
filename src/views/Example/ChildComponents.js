import React from 'react';

class ChildComponent extends React.Component {
    
    state = {
        name: '',
        age: '',
        months: '',
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
        console.log('>> Check PROPS:', this.props);
        // let name = this.props.name;
        // let age = this.props.age;

        let { name , age, months, address, arrJobs} = this.props;
       return (
        <>
           <div className="job-lists">
            {
                arrJobs.map((item,index) => {
                    return (                      
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>                   
                        
                    )
                })
            }
           </div>
        </>
       )
    }
}

export default ChildComponent;
