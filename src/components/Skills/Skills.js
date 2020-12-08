import React from 'react';

const skillsArray = [
    {
        id: 1,
        name:'Javascript',
        rating: 4
    },{
        id: 2,
        name:'HTML/CSS',
        rating: 3.5
    },{
        id: 3,
        name:'ReactJS/Redux',
        rating: 4
    },
    {
        id: 4,
        name:'Enzyme,Mocha And Chai',
        rating: 3.5
    },
    {
        id: 4,
        name:'React Native',
        rating: 3
    },{
        id: 5,
        name:'AngularJS',
        rating: 3
    },
    {
        id: 6,
        name:'Git',
        rating: 4
    }
]

const Skills = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2>Skills</h2>
                <div style={{    
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                {skillsArray.map((skills)=> (
                <React.Fragment>
                    <div className="col-md-6">
                        <label>{skills.name}</label>
                    </div>
                    <div className="col-md-6">
                    <div class="w3-light-grey" key={skills.id} style={{backgroundColor:'#CCCCCC', borderRadius: '5px'}}>
                        <div class="w3-grey" style={{height:'50px',width:`${skills.rating*20}%` , backgroundColor: '#313131', borderRadius: '5px' }}></div>
                    </div><br /><br />
                </div>
                </React.Fragment>
                ))}
                </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;
