import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './Components/TextForm';


function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText = "About"/>
    <div className="container my-3">
    <TextForm heading="Enter your text to analyze"/>
    </div>
    </>
  );
}

export default App;
Navbar.propTypes = {title : PropTypes.string, aboutText : PropTypes.string}
Navbar.defaultProps ={title : "Set title here", aboutText: "Set about here"}