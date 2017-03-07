var React = require('react');
var Song = require('./Song.jsx');

var ChartList = React.createClass({
  render: function () {
    var songNodes = this.props.songs.map(function(song, index){
      return (
        <Song key = {song.id.label}>
        <div className = "song">
        <h2>{index + 1}</h2>
        <img height = "70" src = {song["im:image"][2].label}/>
        <div className = "detail">
          {song["im:artist"].label}: {song["im:name"].label}
          <a href = {song.link[1].attributes.href}>Listen</a>
          {song["im:price"].label}
        </div>
        </div>
        </Song>
        );
    });

    return (
      <div className = "chart-list">
        {songNodes}
      </div>
    );
  }
});

module.exports = ChartList;