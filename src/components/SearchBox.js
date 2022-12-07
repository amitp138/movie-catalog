import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-4 d-flex'>
			<input
				className='form-control '
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
				onKeyDown={props.onKeyDown}
			></input>
			<input type="button" className='btn-light btn' value="🔍" onClick={props.Search} />
		</div>
	);
};

export default SearchBox;
