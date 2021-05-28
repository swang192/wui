import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typography from '@/basics/typography';
import Spacer from '@/layout/spacer';

const styles = theme => ({
  root: {
    [theme.breakpoints.tablet]: {
      padding: [[0, 16]],
      border: `1px solid ${theme.palette.grey.panelBorder}`,
      borderTopWidth: 8,
      borderRadius: [[3, 3, 0, 0]],
    },
  },
});

const MobileListContainer = ({ classes, className, title, children }) => {
  const hidden = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <div className={classNames(classes.root, className)}>
      {title && hidden ? null : (
        <>
          <Spacer v={8} />
          <Typography style={{ fontWeight: 'bold' }}>{title}</Typography>
        </>
      )}
      {children}
    </div>
  );
};

MobileListContainer.propTypes = {
  /** @ignore */
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,

  /** The title, shown only on tablet and smaller */
  title: PropTypes.string,

  /** The contents, shown regardless of screensize */
  children: PropTypes.node.isRequired,
};

MobileListContainer.defaultProps = {
  className: '',
  title: '',
};

export default withStyles(styles)(MobileListContainer);
