import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { changeFieldDepartement } from '../../store/reducers/petsitters';

import dataDepartment from '../../data/departements-region.json';
import './InputSelectDepartment.scss';

function InputSelectDepartment() {
  // state of department value
  // const [department, setDepartment] = useState('');

  const dispatch = useDispatch();

  const departement = useSelector((state) => state.petsitters.departement);

  function handleChangeDepartement(event) {
    dispatch(changeFieldDepartement(event.target.value));
    console.log(departement);
  }

  return (
    <FormControl fullWidth sx={{ marginBottom: '.5rem' }}>
      <InputLabel id="select-department">Département</InputLabel>
      <Select
        label="Département"
        labelId="select-department"
        value={departement}
        onChange={handleChangeDepartement}
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
