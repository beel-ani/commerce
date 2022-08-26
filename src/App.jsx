import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { List } from "rmwc";
import Data from "./component/data";
import Desplegar from "./component/Drawer";
import Detalle from "./component/Detalle";
import PocketDuck from "./component/PocketDuck";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="root">
          <Desplegar />
          <List />
          <Detalle key={PocketDuck} />
          <DeleteIcon color="primary" fontSize="large" />
          <Icon color="primary">star</Icon>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}
          >
            Eliminar
          </Button>
          <IconButton aria-label="delete" color="primary">
            <DeleteIcon />
          </IconButton>
          <div className="container mt-3">
            <img src={<Data />} />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
