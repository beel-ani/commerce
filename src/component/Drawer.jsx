import React from "react";

const [abrir, setAbrir] = React.useState(false);

const Desplegar = () => {
  setAbrir(!abrir);

  return (
    <div className={classes.root}>
      <Navbar desplegar={desplegar} />
      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={desplegar} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>

        {/* <button onClick={() => desplegar()}>Abrir</button> */}
      </div>
    </div>
  );
};
export default Desplegar;
