import React from 'react';

const Search = (props) => {

    console.log(props);
    return (
        <div>
            Search
            {props.location.search}
        </div>
    );
};

export default Search;