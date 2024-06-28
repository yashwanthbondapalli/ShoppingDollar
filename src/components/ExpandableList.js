import React, { useState } from 'react';
import categories from '../categories.json';
import { List, ListItemText, Collapse, ListItemButton, Paper } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const ExpandableList = () => {
  const [open, setOpen] = useState({});

  const handleMouseEnter = (category) => {
    setOpen((prevState) => ({
      ...prevState,
      [category]: true,
    }));
  };

  const handleMouseLeave = (category) => {
    setOpen((prevState) => ({
      ...prevState,
      [category]: false,
    }));
  };

  const renderSubcategories = (subcategories, parentKey) => {
    return subcategories.map((subcategory, index) => {
      const key = `${parentKey}-${index}`;
      const hasSubcategories = subcategory.subcategories && subcategory.subcategories.length > 0;
      return (
        <React.Fragment key={key}>
          <ListItemButton
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={() => handleMouseLeave(key)}
          >
            <ListItemText primary={subcategory.name} />
            {hasSubcategories ? open[key] ? <ExpandLess /> : <ExpandMore /> : null}
          </ListItemButton>
          {hasSubcategories && (
            <Collapse in={open[key]} timeout="auto" unmountOnExit>
              <Paper
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={() => handleMouseLeave(key)}
                elevation={3}
                style={{ marginLeft: '16px' }}
              >
                <List component="div" disablePadding>
                  {renderSubcategories(subcategory.subcategories, key)}
                </List>
              </Paper>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <List component="nav">
      {categories.categories.map((category, index) => (
        <React.Fragment key={index}>
          <ListItemButton
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <ListItemText primary={category.name} />
            {category.subcategories.length > 0 ? open[index] ? <ExpandLess /> : <ExpandMore /> : null}
          </ListItemButton>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <Paper
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              elevation={3}
              style={{ marginLeft: '16px' }}
            >
              <List component="div" disablePadding>
                {renderSubcategories(category.subcategories, index)}
              </List>
            </Paper>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default ExpandableList;
