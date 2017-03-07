var React = require('react');
var ChartList = require("../components/ChartList.jsx");

var ChartBox = React.createClass({
  componentDidMount: function(){
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function(){
      if (request.status !== 200) return;
        var data = JSON.parse(request.responseText);
        this.setState({songs: data.feed.entry, focusSong: data.feed.entry[0]});
        console.log("songs", this.state.songs);
    }.bind(this);

    request.send();
  },

  getInitialState: function(){
    return { songs: [], focusSong: null };
  },

  render: function () {
    return (
      <div className = "chart-area">
      <h1>UK CHART</h1>
      <ChartList songs = {this.state.songs} />
      </div>
      );
  },

  didSelectSong: function(song){
    this.setState({focusSong: song});
  }
});

module.exports = ChartBox;