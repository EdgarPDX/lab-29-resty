import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ 
  url, 
  handleUrlChange, 
  handleJSONChange, 
  json, 
  onSubmit }) => (
  <form>
    <input
      onChange={handleUrlChange}
      value={url}
    />
    <input  name="method" type="radio" value="GET">GET</input >
    <input  name="method" type="radio" value="PUT">PUT</input >
    <input  name="method" type="radio" value="POST">POST</input >
    <input  name="method" type="radio" value="DELETE">DELETE</input >

    <input
      onChange={handleJSONChange}
      value={json}
    />
    <button
      onSubmit={onSubmit}
    >SEND
    </button>
  </form>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  json: PropTypes.string.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
  handleJSONChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
