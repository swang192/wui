import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import ExclusivePanelGroup from './exclusivePanelGroup';

const defaultExpandIcon = <KeyboardArrowDown />;

const panelStyles = {
  root: {
    border: 'none',
    boxShadow: 'none',
    marginBottom: 0,

    '&:before': {
      opacity: 0,
    },
  },
  expanded: {
    margin: [[0, 0, 20, 0]],
  },
};
const StyledPanel = withStyles(panelStyles)(MuiAccordion);

const summaryStyles = theme => ({
  // Used internally to modify other styles
  expanded: {},

  root: {
    borderBottom: `1px solid ${theme.palette.grey.panelBorder}`,
    paddingLeft: theme.spacing(1),
  },
  content: {
    '&$expanded': {
      marginTop: 0,
    },
  },
});
const StyledSummary = withStyles(summaryStyles)(MuiAccordionSummary);

StyledSummary.defaultProps = {
  ...StyledSummary.defaultProps,
  expandIcon: defaultExpandIcon,
};

const detailStyles = theme => ({
  root: {
    padding: [[8, 0, 8, 24]],

    [theme.breakpoints.desktop]: {
      paddingRight: '24px',
    },
  },
});
const StyledDetails = withStyles(detailStyles)(MuiAccordionDetails);

const iconPanelStyles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'baseline',
    // Extend the background to the icon backing
    backgroundColor: theme.palette.common.white,

    '& > :first-child': {
      position: 'relative',
      top: '12px',
      width: '40px',
      height: '40px',

      [theme.breakpoints.tablet]: {
        width: '32px',
        height: '32px',
      },
    },

    '& > :last-child': {
      flex: 1,
    },
  },
});

const IconPanel = ({ classes, icon, children, ...panelProps }) => (
  <div className={classes.root}>
    {icon}
    <StyledPanel {...panelProps}>{children}</StyledPanel>
  </div>
);

IconPanel.propTypes = {
  /** @ignore */
  classes: PropTypes.shape({}).isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
const IconPanelExport = withStyles(iconPanelStyles)(IconPanel);

export {
  ExclusivePanelGroup,
  StyledPanel as Accordion,
  StyledSummary as AccordionSummary,
  StyledDetails as AccordionDetails,
  IconPanelExport as IconPanel,
  defaultExpandIcon,
};
