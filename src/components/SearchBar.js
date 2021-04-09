import React,{useState} from "react";

const SearchBar = ({onSearchSubmit}) => {

  const [searchKey,setSearchKey] = useState("");



  const onFormSubmit = (event) => {
    event.preventDefault();

    //calling from the parent
   onSearchSubmit(searchKey);
  };

    return (
      <div className="search-bar ui segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={searchKey}
              onChange={event => {setSearchKey(event.target.value)}}
            />
          </div>
        </form>
      </div>
    );
}

export default SearchBar;
