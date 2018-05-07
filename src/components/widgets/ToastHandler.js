import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearToasts } from '../../redux/actions/toast.actions';
import { Position, Toaster, Intent } from '@blueprintjs/core';

class ToastHandler extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.props.toastQueue.size) {
            this.props.toastQueue.forEach((toast) => {
                const { action, intent, message, onDismiss, timeout } = toast;
                let intentType, iconType;
                switch (intent) {
                    case 'error':
                        intentType = Intent.DANGER;
                        iconType = 'warning-sign';
                        break;
                    case 'success':
                    default:
                        intentType = Intent.SUCCESS;
                        iconType = 'tick';
                        break;
                }
                toast.intent = intentType;
                toast.icon = iconType;
                this.toaster.show(toast);
            });
            this.props.clearToasts();
        }
    }

    refHandlers = {
        toaster: el => (this.toaster = el),
    };

    render() {
        return (
            <Toaster position={ Position.TOP_CENTER } ref={ this.refHandlers.toaster } />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    toastQueue: state.toast.toastQueue,
});
const mapDispatch = {
    clearToasts
};
const ToastHandlerContainer = connect(
    mapStateToProps,
    mapDispatch
)(ToastHandler);

export default ToastHandlerContainer;