import React, { Component } from 'react';
import CreateBandas from './Createbandas';
import Header from './Header';
import MusicaList from './BandasList';
import { Route, Routes } from 'react-router-dom';


/*class App extends Component {
  render() {
    return <CreateRaza />;
  }
}*/

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/bandasv" element={<MusicaList/>} />
          <Route
            path="/crear"
            element={<CreateBandas/>}
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;