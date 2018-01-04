/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import LowKeyboardAndMouseActivity from '../../components/LowKeyboardAndMouseActivity/index';

// eslint-disable-next-line
export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }
  componentWillMount() {
    this.getChartDate();
  }

  getChartDate = () => {
    this.setState({
      chartData: {
        labels: [
          'per1',
          'per2',
          'per3',
          'per4',
          'per5',
          'per6',
          'per7',
          'per8',
          'per9',
          'per10',
        ],
        datasets: [
          {
            label: 'Low activity',
            duration: 1000,
            data: [
              '110',
              '120',
              '110',
              '140',
              '150',
              '120',
              '145',
              '178',
              '132',
              '174',
            ],
            backgroundColor: [
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
            ],
          },
          {
            label: 'Normal activity',
            data: [
              '241',
              '241',
              '341',
              '341',
              '341',
              '341',
              '352',
              '352',
              '300',
              '300',
            ],
            backgroundColor: [
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
              'rgba(128,128,128,0.5)',
            ],
          },
        ],
      },
    });
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 1 }}>
          <LowKeyboardAndMouseActivity chartData={this.state.chartData} />
        </div>
        <div style={{ flex: 1 }} />
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
