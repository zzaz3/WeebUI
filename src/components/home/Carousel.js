import React, {PropTypes} from 'react';
import Carousel from 'nuka-carousel';

const REACT_STATELESS_COMPONENT = (props) => {


  return (
    <Carousel autoplay={1} autoplayInterval={6000} framePadding={0} wrapAround={1}>
        <img src="http://puu.sh/zfXfD.png"/>
        <img src="http://puu.sh/zfXfT.png"/>
        <img src="http://puu.sh/zfXfU.png"/>
    </Carousel>
  );
};

Carousel.propTypes = {
  autoplay: PropTypes.bool.isRequired
};

export default REACT_STATELESS_COMPONENT;
