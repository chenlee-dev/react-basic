import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
       console.log('>>> DELETE :', job);
       this.props.deleteAJob(job);
    }

    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>>> Check the Condition :',check);
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.titleJob} - {item.salary} 
                                            <></><span onClick={()=>this.handleOnclickDelete(item)}>x</span>
                                        </div>

                                    )
                                })
                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>}
            </>
        )
    }
}

// const ChildComponent = (props) => {

//         let { arrJobs } = props;
//         // let arrJobs = props.arrJobs;
//         return (
//             <>
//                 <div className="job-lists">
//                 {
//                     arrJobs.map((item,index) => {
//                         if (item.salary >= 500) {
//                             console.log(item.salary);
//                             return (                      
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>                   

//                             )
//                         }

//                     })
//                 }
//                 </div>
//             </>
//         )
// }

export default ChildComponent;
