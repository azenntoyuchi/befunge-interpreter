import * as React from "react";
import styled from 'styled-components';

import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

const StyledListItem = styled(ListItem)`
  width: fit-content;
  margin: 0 auto;
  background-color: red !important;
`;

const Option: React.FC<{}> = () => {
  const [use, setUse] = React.useState(false);
  const toggle = () => setUse(!use);

  return (
      <List>
        <StyledListItem>
          <ListItemIcon
            onClick={toggle}
          >
            <Checkbox
              disableRipple
              checked={use}
            />
          </ListItemIcon>
          <ListItemText
            primary='Enable step-run mode'
          />
        </StyledListItem>
      </List>
  );
}

export default Option;

