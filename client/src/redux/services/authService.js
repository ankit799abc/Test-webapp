import { userLogin, userRegister } from "../features/auth/authActions";
import store from "../../redux/store";

export const handleLogin = (e, email, password, ) => {
  e.preventDefault();
  try {
    if ( !email || !password) {
      return alert("Please Privde All Feilds");
    }
    store.dispatch(userLogin({ email, password }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
   e,
    name,
    email,
    password,
    phone,
    address,
    website,
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
      name,
      email,
      password,
      phone,
      address,
      website,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
