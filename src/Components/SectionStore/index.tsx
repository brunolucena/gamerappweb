import Button from 'Components/Button';
import React from 'react';
import './styles.scss';

interface Props {
    title: string
    titleButton: string;
    actionButton: Function;
    content: Function;
}

const SectionStore: React.FC<Props> = (props) => {
    return <div className="containerSectionStore">
        <div className="header">
            <p>{props.title}</p>
        </div>
        <div className="body">
            {props.content()}
        </div>
       
    </div>;
}

export default SectionStore;