import PropTypes from 'prop-types'

//this should be a .js file. JSX is the HTML looking stuff in the return, but the component itself is JS

function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}


Header.defaultProps = {
  text: 'Slide65',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: 'white',
}


Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string

}

export default Header