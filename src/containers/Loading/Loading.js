import React from 'react';
import './style.css';
import { connect } from 'react-redux';

const Loading = props => {
  const { stateLoading } = props;

  let html = null;
  if (stateLoading) {
    html = (
      <div>
        <div className='loading'>Loading&#8230;</div>
      </div>
    );
  }
  return html;
};

function mapStateToProps(state) {
  return {
    stateLoading: state.loading.stateLoading
  };
}

export default connect(mapStateToProps, null)(Loading);
