var React = require('react');
var {Link} = require('react-router');


var About = (props) => {
  return(
    <div>
    <h1 className="text-center page-title">About</h1>
    <p>This is a weather application built on React. This app was built using videos from The Complete React Web Developer Course.</p>
    <p>Here are some of the tools I used</p>
    <ol>
    <li>
      <a href = "https://facebook.github.io/react/">React</a> - This was the Javascript framework used
    </li>
    <li>
      <a href = "http://OpenWeatherMap.org">OpenWeatherMap</a> - I used the open weather map to pull weather data
    </li>
    <li>
      Foundation
    </li>
    <li>
      JQuery
    </li>
    </ol>
    </div>
  )
};

module.exports = About;
