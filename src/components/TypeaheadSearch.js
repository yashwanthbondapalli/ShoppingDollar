import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import categories from '../categories.json';

const flattenCategories = (categories) => {
  let flatList = [];
  categories.forEach((category) => {
    flatList.push(category.name);
    if (category.subcategories) {
      flatList = flatList.concat(flattenCategories(category.subcategories));
    }
  });
  return flatList;
};

const allCategories = flattenCategories(categories.categories);

const TypeaheadSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = allCategories.filter((category) =>
        category.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <TextField
        label="Search Categories"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ width: '100%', maxWidth: 600, backgroundColor: '#fff', borderRadius: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
      />
      {suggestions.length > 0 && (
        <List>
          {suggestions.map((suggestion, index) => (
            <ListItem button key={index}>
              <ListItemText primary={suggestion} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default TypeaheadSearch;
