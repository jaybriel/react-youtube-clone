import React from "react";

class SearchBar extends React.Component {
  state = { searchKey: "" };

  onSearch = (event) => {
    this.setState({ searchKey: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //calling from the parent
    this.props.onSearchSubmit(this.state.searchKey);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchKey}
              onChange={this.onSearch}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
