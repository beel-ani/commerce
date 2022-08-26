import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ListaMUI = () => {
  return (
    <div>
      <List component="nav" aria-label="cicle">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Nombre de usuario" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Carrito" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default ListaMUI;
