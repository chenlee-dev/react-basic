import React from 'react';
import ChildComponent from './ChildComponents';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    
    state = {
        arrJobs: [
            { id: 'Job-1', titleJob: 'nails-tech', salary: '400'},
            { id: 'Job-2', titleJob: 'tester', salary: '700'},
            { id: 'Job-3', titleJob: 'dev-tech', salary: '900'},
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent', job);

       this.setState({
            arrJobs: [...this.state.arrJobs, job]
       })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        return (
            <>
                <AddComponent 
                addNewJob = {this.addNewJob}
                />

                <ChildComponent 
                    arrJobs = {this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />               
            </>
        )
    }
}

export default MyComponent;