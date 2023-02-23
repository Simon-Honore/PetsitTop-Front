import seedData from '../../data/seed/one-user.json';
import { saveUserInfos } from '../reducers/user';

export function findUser(data) {
  const userConfirm = seedData.find((obj) => {
    obj.email === data.email;
    obj.password === data.email;
  });
  return userConfirm;
}

export const login = () => (dispatch, getState) => {
  const state = getState();
  const { email, password } = state.user;

  const data = { email, password };

  const userConfirm = findUser(data);

  dispatch(saveUserInfos(userConfirm));
};
