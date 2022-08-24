import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent, useThemeProps } from '@mui/material';

export default function Filter(prop) {

  const handleType = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    prop.setType(event.target.value);
  };

  const handlePrice = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    prop.setPrice(event.target.value);
  };

  const handleRating = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    prop.setRating(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">{prop.name}</InputLabel>
      {prop.name === "type" && 
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={prop.type}
            label="Type"
            onChange={handleType}
        >
            <MenuItem value={"Veg"}>Veg</MenuItem>
            <MenuItem value={"Non-Veg"}>Non-Veg</MenuItem>
        </Select>
      }

      {prop.name === "price" && 
        <Select
            labelId = "demo-select-small"
            id ="demo-select-small"
            value={prop.price}
            label="Price"
            onChange={handlePrice}
        >
            <MenuItem value={"Increase"}>Increase</MenuItem>
            <MenuItem value={"Decrease"}>Decrease</MenuItem>
        </Select>
      }

      {prop.name === "rating" && 
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={prop.rating}
            label="Rating"
            onChange={handleRating}
        >
            <MenuItem value={"Increase"}>Increase</MenuItem>
            <MenuItem value={"Decrease"}>Decrease</MenuItem>
        </Select>
      }
    </FormControl>
  );
}
