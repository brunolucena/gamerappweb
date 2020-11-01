import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  iconColor?: string;
}

const Search: React.FC<Props> = ({ iconColor }) => {
  return <SearchIcon style={{ color: iconColor || '#919191' }} />;
};

export default Search;
