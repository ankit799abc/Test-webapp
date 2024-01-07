import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/API";


export const userLogin = createAsyncThunk(
  "auth/login",
  async ({  email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", {  email, password });
      //store token
      if (data.success) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        
        window.location.replace("/dashboard");
      }
      //console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      email,
      password,
      phone,
      address,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
      name,
      email,
      password,
      phone,
      address,
      website,
      });
      console.log(data);
      if (data?.success) {
        alert("User Registerd Successfully");
        window.location.replace("/");
        // toast.success("User Registerd Successfully");
      }
      return data;
    } catch (error) {
      console.log(error);
      alert("Provide All Field");
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

