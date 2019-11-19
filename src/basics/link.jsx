import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    alignItems: 'center',
    display: 'inline-flex',

    '& svg:first-child': {
      marginRight: 5,
    },
  },
  colorPrimary: {
    color: theme.palette.blue.textboxFocus,

    '&:hover': {
      color: theme.palette.blue.checkboxCheck,
    },
  },
});

export default withStyles(styles)(({ classes, target: externalTarget, ...rest }) => {
  // Clear the target unless it is explicitly specified
  //   so that React Router links work as intended.
  const target = typeof externalTarget === 'undefined' ? null : externalTarget;

  return <MuiLink target={target} underline="always" TypographyClasses={classes} {...rest} />;
});