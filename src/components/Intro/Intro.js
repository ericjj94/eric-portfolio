import React from 'react';

import IntroWrapper from './styledcomponents/IntroWrapper';
import IntroText from './styledcomponents/IntroText';
// import SocialMediaWrapper from './styledcomponents/SocialMediaWrapper';


const Intro = () => {
    return (
        <IntroWrapper>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <IntroText>
                     <h1>I'm Eric Jose Joy</h1>
                     <p>I'm a New Delhi based web developer with a total experience of 4 years. I have been working as a ReactJS developer and have created single page and server side rendered applications using ReactJS.
                     </p>
                  </IntroText>
               </div>
            </div>
         </div>
      </IntroWrapper>
    )
}
export default Intro;