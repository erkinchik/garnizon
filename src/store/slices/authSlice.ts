import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { toast } from 'react-toastify';
import { AuthState, loginData, registerData } from "../../types/interface";
import { notification } from "antd";
import { token, user } from "../../utils";

const URL = "http://discoverystudio.xyz:6969";

const initialState = {
  error: "",
  isAuth: token || false,
  isRegister: token || false,
  loading: "idle",
  user: JSON.parse(user || "{}") || {},
} as AuthState;

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async function (user: loginData, { rejectWithValue }) {
    try {
      const response = await axios.post(`${URL}/auth/login`, user);

      const {
        data: { accessToken },
      } = response;
      try {
        const login = await axios.get(`${URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(login.data));

        return login.data;
      } catch (error) {
        const err = error as any;
        return rejectWithValue(err.response.data.message);
      }
    } catch (error) {
      const err = error as any;
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async function (user: registerData, { rejectWithValue }) {
    try {
      const { data } = await axios.post(`${URL}/auth/register`, user);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// export const getArchive = createAsyncThunk(
//   "auth/getArchive",
//   async function (params, { rejectWithValue }) {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(`${URL}/history?status=5`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params,
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );
//
// export const paySubscription = createAsyncThunk(
//   "auth/paySubscription",
//   async function (id, { rejectWithValue }) {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         `${URL}/purchase/subscription/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;

      notification.error({
        message: action.payload as string,
        placement: "topLeft",
      });
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = "succeeded";
      state.isAuth = true;
      notification.success({
        message: "Авторизация прошла успешно",
        placement: "topLeft",
      });
    });

    builder.addCase(fetchRegister.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.isRegister = true;
      state.user = action.payload;

      notification.error({
        message: "Регистрация прошла успешно",
        placement: "topLeft",
      });
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.loading = "failed";
      state.isRegister = false;
      // toast.error(`${action.payload}`);
    });

    // [fetchLogin.pending]: (state) => {
    //     state.loading = true;
    // },
    // [fetchLogin.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // },
    // [fetchLogin.fulfilled]: (state, action) => {
    //     if (action.payload.role === "ADMIN") {
    //         state.user = action.payload;
    //         state.error = "";
    //         state.isAuth = true;
    //     } else {
    //         state.error = "Not Admin";
    //     }
    //     state.loading = false;
    // },
    //
    // [getArchive.pending]: (state) => {
    //     state.loading = true;
    // },
    // [getArchive.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // },
    // [getArchive.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.error = "";
    //     state.archiveList = action.payload;
    // },
    //
    // [paySubscription.pending]: (state, action) => {
    //     state.loading = true;
    // },
    // [paySubscription.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // },
    // [paySubscription.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     // state.guardList.data = [action.payload, ...state.guardList.data];
    // },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
