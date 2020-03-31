import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

function TitleTransition(props) {
    return(
        <TransitionGroup>
            <CSSTransition
            appear={true}
            classNames="titles"
            timeout={1500}
            onEntered={props.onEntered}
            >
            {props.elem}
            </CSSTransition>
        </TransitionGroup>
    );
}

export default TitleTransition;
