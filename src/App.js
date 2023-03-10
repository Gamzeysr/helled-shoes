import Header from "./components/Header/header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import './Sass/App.scss';

import data from "./util/data";


function App() {
  return (
    < >
      <Header />
      <Navbar />
      <Main data={data} />

    </>
  );
}

export default App;
