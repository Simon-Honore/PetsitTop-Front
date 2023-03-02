import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { func, string } from 'prop-types';

// import local
import dataDepartment from '../../data/departements-region.json';
import './InputSelectDepartment.scss';

function InputSelectDepartment({
  onChange,
	value,
}) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <FormControl fullWidth sx={{ marginBottom: '.5rem' }}>
      <InputLabel id="select-department">Département</InputLabel>
      <Select
        label="Département"
        labelId="select-department"
        value={value}
        onChange={handleChange}
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

InputSelectDepartment.propTypes = {
  onChange: func.isRequired,
  value: string,
};

InputSelectDepartment.defaultProps = {
  value: '',
};
