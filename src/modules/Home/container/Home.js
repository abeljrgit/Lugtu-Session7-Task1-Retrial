import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { Component } from 'react';
import { RegistrationForm } from '../components';
import { ResultForm } from '../components/ResultForm';
import { ModalComponent } from '../components/Modal';

class Home extends Component {
  state = {
    value: 1,
  };

  handleChange = (e, val) => {
    this.setState({
      value: val,
    });
  };

  render() {
    return (
      <section>
        <ModalComponent />
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={`${this.state.value}`}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={this.handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="REGISTER" value="1" />
                <Tab label="RESULT" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <RegistrationForm />
            </TabPanel>
            <TabPanel value="2">
              <ResultForm />
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    );
  }
}

export default Home;
