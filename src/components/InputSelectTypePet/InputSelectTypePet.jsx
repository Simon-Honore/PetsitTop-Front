import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

// import local
import './InputSelectTypePet.scss';

function InputSelectTypePet({ value, onChange, petTypes }) {
  // const dataType = ['chien', 'chat', 'lapin', 'rongeur', 'oiseau', 'poisson', 'reptile', 'autre'];

  // const dispatch = useDispatch();

  // const petType = useSelector((state) => state.petsitters.petType);
  // on select of pet type, change this value
  // const handleChangePetType = (event) => {
  //   dispatch(changeFieldPetType(event.target.value));
  // };
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: '1rem', marginRight: '.5rem', width: '30%' }}>
      <InputLabel id="select-petType">Type d&#39;animal</InputLabel>
      <Select
        label="Type d'animal"
        labelId="select-petType"
        value={value}
        onChange={handleChange}
      >
        {petTypes.map((item) => (
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
