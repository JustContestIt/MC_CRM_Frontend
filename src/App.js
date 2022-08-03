import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {

    const [modal, setModal] = useState(false);

    return (
        <div className="App">
            {/*<Login/>*/}

            {/*<MyModal visible={modal} setVisible={setModal}/>*/}
            {/*<button onClick={() => setModal(true)}>Модалка</button>*/}
            <Main/>
        </div>
  );
}

export default App;
