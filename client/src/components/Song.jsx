var React = require('react');

var Song = function(props){
  return(
    <div className = "song">
      {props.children}
    </div>
    );
};

module.exports = Song;
