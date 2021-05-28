import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Button from '@/input/button';
import Typography from '@/basics/typography';
import Grid from '@/layout/grid';

import useWidth from '../useWidth';

const styles = theme => ({
  seeMore: {
    color: theme.palette.blue.textboxFocus,
    textDecoration: 'underline',
    padding: [[8, 0]],
  },
});

// On screen size md and lower this component will display only
//   props.initiallyShowUpTo of its children, along with a link
//   to toggle viewing the rest
const MobileCollapsedList = ({ classes, children, initiallyShowUpTo: propsInitiallyShowUpTo }) => {
  const [closed, setClosed] = useState(true);
  const arrChildren = React.Children.toArray(children);
  let initiallyShowUpTo = propsInitiallyShowUpTo;
  const width = useWidth();
  const theme = useTheme();

  const isWidthUp = (screenWidth, breakpoint, inclusive = true) => {
    const keys = theme.breakpoints;

    if (inclusive) {
      return keys.indexOf(screenWidth) <= keys.indexOf(breakpoint);
    }
    return keys.indexOf(screenWidth) < keys.indexOf(breakpoint);
  };

  const isMobileDisplay = !isWidthUp('md', width);

  const toggleClosed = () => {
    setClosed(!closed);
  };

  if (isWidthUp('sm', width)) {
    initiallyShowUpTo += 1;
  }

  // If there's only one item/not enough to hide, there is nothing to collapse
  if (arrChildren.length === 1 || arrChildren.length <= initiallyShowUpTo) {
    return children;
  }

  const initialItems = arrChildren.slice(0, initiallyShowUpTo);
  const collapseableItems = arrChildren.slice(initiallyShowUpTo);

  const hidden = useMediaQuery(muiTheme => muiTheme.breakpoints.up('md'));

  return (
    <>
      {initialItems}

      <Collapse in={!(closed && isMobileDisplay)}>{collapseableItems}</Collapse>

      {hidden ? null : (
        <Grid container alignItems="center">
          <Button variant="text" onClick={toggleClosed}>
            <Typography className={classes.seeMore}>
              {closed ? `See ${collapseableItems.length} more` : 'See less'}
            </Typography>
          </Button>
        </Grid>
      )}
    </>
  );
};

MobileCollapsedList.propTypes = {
  /** @ignore */
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,

  /** On screen size md and lower this component will display only
       props.initiallyShowUpTo of its children, along with a link
       to toggle viewing the rest */
  initiallyShowUpTo: PropTypes.number,
};

MobileCollapsedList.defaultProps = {
  initiallyShowUpTo: 1,
};

export default withStyles(styles)(MobileCollapsedList);
