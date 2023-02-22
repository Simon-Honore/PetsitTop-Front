import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import dataDepartment from '../../data/departements-region.json';
import './InputSelectDepartment.scss';

function InputSelectDepartment() {
  // state of department value
  const [department, setDepartment] = useState('');

  // on select of department, change this value
  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };
  return (
    <FormControl fullWidth sx={{ marginBottom: '.5rem' }}>
      <InputLabel id="select-department">Département</InputLabel>
      <Select
        label="Département"
        labelId="select-department"
        value={department}
        onChange={handleChangeDepartment}
      >
        {dataDepartment.map((obj) => (
          <MenuItem
            key={obj.num_dep}
            value={obj.num_dep}
          >
            {`${obj.num_dep} - ${obj.dep_name}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default InputSelectDepartment;
