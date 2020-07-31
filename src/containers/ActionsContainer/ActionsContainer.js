import React from 'react';
import { connect } from 'react-redux';
import { performAction } from '../../actions';
import Actions from '../../components/Actions';

const mapStateToProps = (state) => {
  return {
    actionResults: state.receiveActionResults.actionResults,
    userID: state.logUserIn.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    performAction: (userID, action) => {
      dispatch(performAction(userID, action));
    },
  };
};

function ActionsContainer(props) {
  const actions = ['Practice', 'Live', 'Tsunagari', 'Tweet'];
  return <Actions {...props} actions={actions} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsContainer);
