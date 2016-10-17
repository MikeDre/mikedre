import React from 'react';

module.exports = React.createClass({
  displayName: 'Head',

  componentWillReceiveProps: function(nextProps) {
    document.title = nextProps.title
  },

  shouldComponentUpdate: function() {
    return false
  },

  render: function() {
    var title = this.props.title,
        description = this.props.description

    return (
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/facebook-thumbnail.png" />
      </head>
    )
  }
})
