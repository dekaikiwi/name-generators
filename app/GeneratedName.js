import React from "react";
import Sentencer from "sentencer"

var customNouns = require('json!./nouns.json');
var customAdjectives = require('json!./adjectives.json');
var customPatterns = require('json!./patterns.json');
var randomItem = require('random-item');


export default React.createClass({
  getInitialState: function() {
  return {
          sentence: "Click to Generate a Name!"
        };
  },
  setGenerator: function () {
    Sentencer.configure({
    // the list of nouns to use. Sentencer provides its own if you don't have one!
    nounList: customNouns[this.props.sentenceType],

    // the list of adjectives to use. Again, Sentencer comes with one!
    adjectiveList: customAdjectives[this.props.sentenceType],

    // additional actions for the template engine to use.
    // you can also redefine the preset actions here if you need to.
    // See the "Add your own actions" section below.
    actions: {

    }
  });
  },
  generateSentence: function () {
    var sentenceType = this.props.sentenceType;
    var sentenceTemplate;
    this.setGenerator();
    sentenceTemplate = randomItem(customPatterns[sentenceType]);
    this.setState({sentence: Sentencer.make(sentenceTemplate)});
  },
  render: function() {
    return (
    <div class="wrapper">
      <div className="generated-name">
        {this.state.sentence}
      </div>

      <button onClick={this.generateSentence}>
        Generate!
      </button>
    </div>
    );
  },
});