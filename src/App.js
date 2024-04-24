import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div className="App" style={{ padding: "30px" }}>
      <h2> Aplikasi Penyimpanan Kontak</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
