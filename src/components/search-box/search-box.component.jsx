// import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ searchbox, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${searchbox}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.searchbox}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
