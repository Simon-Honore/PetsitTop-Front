import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import './InputSelectTypePet.scss';

function InputSelectTypePet() {
  const dataType = ['chien', 'chat', 'lapin', 'rongeur', 'oiseau', 'poisson', 'reptile', 'autre'];

  // state of pet type value
  const [petType, setPetType] = useState('');

  // on select of pet type, change this value
  const handleChangePetType = (event) => {
    setPetType(event.target.value);
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
      <InputLabel id="select-petType">Type d&#39;animal</InputLabel>
      <Select
        label="Type d'animal"
        labelId="select-petType"
        value={petType}
        onChange={handleChangePetType}
      >
        {dataType.map((item) => (
          <MenuItem
            key={item}
            value={item}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default InputSelectTypePet;
