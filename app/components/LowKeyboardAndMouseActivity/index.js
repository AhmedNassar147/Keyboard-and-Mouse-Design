import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  MenuItem,
  DropDownMenu,
  Divider,
  Dialog,
  FlatButton,
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Bar } from 'react-chartjs-2';
import {
  container,
  head,
  flexedtags,
  footerLeft,
  footerRight,
  displayestags,
} from './activityStyles';

// eslint-disable-next-line
class LowKeyboardAndMouseActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      chartData: props.chartData,
      open: false,
    };
  }

  handleChange = (event, index, value) => this.setState({ value });
  handelClose = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handelOpen = () => {
    this.setState({
      open: true,
    });
  };
  render() {
    const actions = [
      <FlatButton label="close Me" primary onClick={this.handelClose} />,
    ];
    return (
      <Paper style={container}>
        <div style={head}>
          <div style={flexedtags}>
            <p>People with</p>
            <h4>Low keyBoard & Mouse Activity</h4>
          </div>

          <div style={displayestags}>
            <DropDownMenu
              value={this.state.value}
              onChange={this.handleChange}
              openImmediately={false}
              style={flexedtags}
            >
              <MenuItem value={1} primaryText="Last 7 Days" />
              <MenuItem value={2} primaryText="Yasterday" />
              <MenuItem value={5} primaryText="This Week" />
              <MenuItem value={4} primaryText="Last Two Weeks" />
              <MenuItem value={3} primaryText="This Month" />
            </DropDownMenu>

            <MoreVertIcon
              style={{ flex: 1, marginTop: '22px' }}
              onClick={this.handelOpen}
            />

            <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handelClose}
            >
              <h4>some new component :)</h4>
            </Dialog>
          </div>
        </div>
        <Divider />

        <div>
          <Bar
            data={this.state.chartData}
            options={{
              legend: {
                display: true,
                position: 'top',
              },
            }}
          />
        </div>

        <Divider />

        <div style={displayestags}>
          <div style={footerLeft}>
            <p>10 People Selected</p>
          </div>

          <div style={footerRight}>
            <p> See ScreenShot Report </p>
          </div>
        </div>
      </Paper>
    );
  }
}

LowKeyboardAndMouseActivity.propTypes = {
  chartData: PropTypes.object,
};

export default LowKeyboardAndMouseActivity;
