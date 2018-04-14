import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectAsyncReducer } from './store';

export default class Wrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      Component: null,
    };
  }

  componentDidMount() {
    window.interactionLoaded = ({ Component, composer, reducer }) => {
      injectAsyncReducer(this.context.store, 'interaction', reducer);
      this.setState({
        Component: connect(
          ({ interaction }) => ({ interaction }),
          composer,
        )(Component),
      });
    };

    import(/* webpackChunkName: interaction */ '../src/index');
  }

  render() {
    const { Component } = this.state;
    return (
      <div>
        { Component && <Component /> }
      </div>);
  }
}

Wrapper.contextTypes = { store: PropTypes.object };
