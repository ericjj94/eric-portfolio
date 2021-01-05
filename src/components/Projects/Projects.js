import React from 'react';
import Card from './Card';

const projects = [{
    name: 'Cofman',
    url: 'http://www.cofman.com',
    description: 'Introduced React to the legacy application of Cofman. Created React components that are unit tested with enzyme,mocha and chai. Removed the existing jquery and implemented it in React',

},{
    name: 'Tekion Service Menu Admin',
    url: '',
    description: 'Created an admin panel for Tekion Corp that allows the admin to add or modify the service details of the vehicles that are currently being used in the US.This would allow the admin to make quick changes in the electric cars updates',

},{
    name: 'Hey Travelista',
    url: 'https://www.heytravelista.com',
    description: 'HeyTravelista is a hotel booking website based out in Hong Kong and is developed in ReactJS. Allows the users to browse to hotels and book the hotels on selected dates.'
},
{
    name: 'PizzaMania',
    url: '',
    description: 'A pizza delivery website created for the users in Delhi/NCR region. The app uses geoLocation and is developed in ReactJS'
},
{
    name: 'Mono Porto',
    url: '',
    platform: 'Mobile- ReactNative',
    description: 'A parcel delivery app created in React Native that allows the user to send/track parcels from one place to another'
},
{
    name: 'Mono Porto Admin Panel',
    url: '',
    platform: 'Web',
    description: 'An admin panel that keeps track of the customers, delivery boys, generates reports and manages transactions'
}]
const Projects = () => {
    function renderProjectDetails() {
        return projects.map((project,index)=>{
                 return  <Card project={project}/>;
        })
    }
    return (
        <div className="container">
                <h3>Projects</h3>
            <div className="row">
            {renderProjectDetails()}
            </div>
        </div>
    )
}
export default Projects;