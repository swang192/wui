import * as React from 'react';
import PropTypes from 'prop-types';

export default class Spacer extends React.PureComponent {
  static propTypes = {
    /** Horizontal size (in `px`) */
    h: PropTypes.number,

    /** Vertical size (in `px`) */
    v: PropTypes.number,

    /** Sets `display: inline-flex` */
    inline: PropTypes.bool,
    content: PropTypes.node,

    hidden: PropTypes.bool,
  };

  static defaultProps = {
    h: 0,
    v: 0,
    content: null,
    inline: false,
    hidden: false,
  };

  render() {
    const { inline, content, v: vertical, h: horizontal, hidden } = this.props;

    const display = inline ? 'inline-flex' : 'flex';

    return hidden ? null : (
      <span
        style={{
          display,
          height: vertical,
          width: horizontal,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {content}
      </span>
    );
  }
}
