var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = (props) => {
  return (
      <div>

          <h2>Nav Component</h2>
          <div>
              <IndexLink to="/" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>
                  Get Weather
              </IndexLink>
          </div>
          <div>
              <Link to="about" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>
                  About
              </Link>
          </div>

          <div>
              <Link to="examples" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>
                  Examples
              </Link>
          </div>
      </div>
  )

}


module.exports = Nav;
