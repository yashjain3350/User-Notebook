import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

const Backdrop = props => {
    return <div onClick={props.onConfirm} className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>

            <div className={classes.content}>
                <p>{props.message}</p>
            </div>

            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = props => {
    const clickHandler = () => {
        props.error();
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={clickHandler} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={clickHandler} />, document.getElementById('modal-root'))}
        </React.Fragment>
    );
}

export default ErrorModal;