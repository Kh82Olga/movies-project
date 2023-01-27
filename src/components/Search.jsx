import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: 'all'
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };
  handleFilter = (event)=>{
    
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button className="btn search-btn" onClick={()=>this.props.searchMovies(this.state.search)}>SEARCH</button>
        </div>
        <div>
          <label>
            <input name="type" type="radio" />
            <span>All</span>
          </label>
          <label>
            <input name="type" type="radio" />
            <span>Movies only</span>
          </label>
          <label>
            <input name="type" type="radio" />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
