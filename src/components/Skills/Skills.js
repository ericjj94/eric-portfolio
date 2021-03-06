import React from 'react';
import skillsArray from '../../utils/skills';

const Skills = () => {

    function renderSkills(parts){
        return parts && parts.map((skills, i)=> (
            <li style={{ listStyleType: 'none' }} key={String(i)}>
                <React.Fragment>
                    <div className="col-md-6">
                        <label>{skills.name}</label>
                    </div>
                    <div className="col-md-6">
                    <div className="light-grey" key={skills.id} style={{ backgroundColor:'#ccc'}}>
                        <div className="grey" style={{height:'50px',width:`${skills.rating*20}%` , backgroundColor: '#fff' }}></div>
                    </div><br /><br />
                </div>
                </React.Fragment>
            </li>
        )
        );
    }

    function splitSkillsArray() {
        const skills = [];
        const sep = Math.ceil(skillsArray.length / 2);
        const firstPart = skillsArray.slice(0, sep);
        const secondPart = skillsArray.slice(sep, skillsArray.length);
        skills.push(
            <ul className="col-xs-6" key="skills-1">
                {renderSkills(firstPart)}
            </ul>
        );
        skills.push(
            <ul className="col-xs-6" key="skills-2">
                {renderSkills(secondPart)}
            </ul>
        );
        return skills;
      }
    return (
        // change bgcolor to an image
        <div className="background" style={{"backgroundColor":"#000", color: '#fff'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2>Skills</h2>
                <div>
                    {splitSkillsArray()}
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Skills;
