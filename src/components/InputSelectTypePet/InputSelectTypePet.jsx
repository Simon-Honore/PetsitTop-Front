import './InputSelectTypePet.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeFieldPetType } from '../../store/reducers/petsitters';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


function InputSelectTypePet() {
  const dataType = ['chien', 'chat', 'lapin', 'rongeur', 'oiseau', 'poisson', 'reptile', 'autre'];

  const dispatch = useDispatch();

  const petType = useSelector((state) => state.petsitters.petType);
  // on select of pet type, change this value
  const handleChangePetType = (event) => {
    dispatch(changeFieldPetType(event.target.value));
    console.log(petType);
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
