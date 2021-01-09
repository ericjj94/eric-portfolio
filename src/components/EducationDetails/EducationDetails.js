import React from 'react';
import TextBanner from './styledComponents/TextBanner';

const EducationDetails = (props) => {
    return (
        <section>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2>Education</h2>
                </div>
            <div className="col-md-12">
                <h4>Bachelors Of Engineering in Information Technology • 2016</h4>
                <TextBanner>Learnt the fundamentals of computer science and graduated with a CGPA of 7.8</TextBanner>
            </div>
            <div className="col-md-12">
                <h4>Don Bosco School • 2012</h4>
                <TextBanner>Schooling from Don Bosco School.New Delhi</TextBanner>
            </div>
            </div>    
        </div>
        </section>
    ) 
}
export default EducationDetails;