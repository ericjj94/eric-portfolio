import React from 'react';
import profilePic from '../../assets/profilePic.jpg';

const AboutMe = () =>{
    return (
        <div className="row" style={{ margin: '15px 0'}}>
            <h2>About Me</h2>
            <div className="col-md-6">
                <img src={profilePic} alt="my-pic" style={{height: '200px',width: '200px','borderRadius': '50%'}}/>
            </div>
            <div className="col-md-6" style={{ textAlign: 'justify', color: "#fff "}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet risus non ullamcorper rutrum. Mauris finibus id tortor ac vestibulum. Mauris varius dui id lorem scelerisque ultrices. Etiam elementum odio non viverra condimentum. Nam posuere scelerisque neque vitae ornare. Vivamus vulputate, est in faucibus blandit, est sem mattis libero, bibendum rhoncus dui ex nec nisl. Ut et commodo nisl. Aenean porttitor ultrices interdum. Aliquam vel augue ultricies, vestibulum nunc eu, eleifend dolor. Integer pellentesque, sem quis suscipit aliquam, ipsum mauris molestie sapien, quis posuere arcu metus vitae sapien. Nullam non facilisis mauris, sed placerat velit. Quisque accumsan, risus in feugiat blandit, tortor augue pretium felis, lacinia tincidunt erat enim fringilla ante. Nam eu tellus congue, hendrerit dolor a, rhoncus odio. Morbi pulvinar gravida erat, vel aliquam magna tempor congue.
            </div>
        </div>
    );
}
export default AboutMe;