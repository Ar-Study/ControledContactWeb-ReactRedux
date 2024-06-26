import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteKontak,
  detailKontak,
  getListKontak,
} from "../../actions/kontakAction";
import kontak from "../../reducers/kontak";

function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // Memanggil action get list kontak
    console.log("1. use effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);
  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp}-{" "}
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>
                Hapus
              </button>
              <button
                style={{ margin: "10px" }}
                onClick={() => dispatch(detailKontak(kontak))}
              >
                Edit
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading ...</p>
      ) : getListKontakError ? (
        <p>{getListKontakError}</p>
      ) : (
        <p>Data Kosong</p>
      )}
    </div>
  );
}

export default ListKontak;
