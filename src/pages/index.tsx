import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';

import {
  Button,
  Checkbox,
  Container,
  Collapse,
  Grid
} from '@material-ui/core';

import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

import Input from "../components/Input";
import Output from "../components/Output";
import Option from "../components/Option";

const App: React.FC<{}> = () => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Input
            label="Source Code"
            value='64+"!dlroW ,olleH">:#,_@'
            id="Code"
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            label="Input"
            value=""
            id="Input"
          />
        </Grid>

        <Button color="primary" size="large" id="Run">Run</Button>

        <div onClick={toggle}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </div>

        <div>
          <Collapse in={open}>
            <Option />
          </Collapse>
        </div>

        <Grid item xs={12}>
          <Output
            label="Output"
            id="Output"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
