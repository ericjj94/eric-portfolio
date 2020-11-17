import React from 'react';

import IntroWrapper from './styledcomponents/IntroWrapper';
import IntroText from './styledcomponents/IntroText';
import DescriptionText from './styledcomponents/DescriptionText';
import SocialMediaWrapper from './styledcomponents/SocialMediaWrapper';


const Intro = () => {
    return (
        <IntroWrapper>
            <IntroText>I'm Eric Jose Joy</IntroText>
            <DescriptionText>
            I'm a New Delhi based web developer with a total experience of 3 years. I have been working as a ReactJS developer 
            and have created single page and server side rendered applications using ReactJS. 
            </DescriptionText>
            <SocialMediaWrapper>
            <a href="https://github.com/ericjj94" className="fa fa-github"></a>
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-skype"></a>
            </SocialMediaWrapper>
        </IntroWrapper>
    )
}
export default Intro;