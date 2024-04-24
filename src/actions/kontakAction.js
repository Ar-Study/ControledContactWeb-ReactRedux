import axios from "axios";

// Constants
export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

// Actions
export const getListKontak = () => {
  console.log("2. Masuk action");
  // Dispatch itu penghubung dari view,actions dan reducers
  return (dispatch) => {
    // loading
    // Ketika loading langsung diarahkan ke reducer
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get api
    axios({
      method: "GET",
      url: "http://localhost:3000/kontaks",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapat data : ", response);
        // berhasil get api
        // Setelah mendapatkan data lalu mengupdate ke reducer
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        console.log("3. Gagal dapat Data :", error);
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  console.log("2. Masuk action");
  // Dispatch itu penghubung dari view,actions dan reducers
  return (dispatch) => {
    // loading
    // Ketika loading langsung diarahkan ke reducer
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get api
    axios({
      method: "POST",
      url: "http://localhost:3000/kontaks",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("3. Berhasil dapat data : ", response);
        // berhasil get api
        // Setelah mendapatkan data lalu mengupdate ke reducer
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        console.log("3. Gagal dapat Data :", error);
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteKontak = (id) => {
  console.log("2. Masuk action");
  // Dispatch itu penghubung dari view,actions dan reducers
  return (dispatch) => {
    // loading
    // Ketika loading langsung diarahkan ke reducer
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get api
    axios({
      method: "DELETE",
      url: "http://localhost:3000/kontaks/" + id,
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapat data : ", response);
        // berhasil get api
        // Setelah mendapatkan data lalu mengupdate ke reducer
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        console.log("3. Gagal dapat Data :", error);
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        data: data,
      },
    });
  };
};

export const updateKontak = (data) => {
  console.log("2. Masuk action");
  // Dispatch itu penghubung dari view,actions dan reducers
  return (dispatch) => {
    // loading
    // Ketika loading langsung diarahkan ke reducer
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get api
    axios({
      method: "PUT",
      url: "http://localhost:3000/kontaks/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("3. Berhasil dapat data : ", response);
        // berhasil get api
        // Setelah mendapatkan data lalu mengupdate ke reducer
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        console.log("3. Gagal dapat Data :", error);
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
