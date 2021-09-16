import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Button, TextField, Typography } from "@material-ui/core";

// STYLES
import useStyles from "../../styles/User";

// Component
import Restorer from "../Home/Restorer";
import { useHistory } from "react-router-dom";

const datas = {
  name: "roman",
  picture: "",
  password: "*******",
  inscription: 2021,
  email: "roman@hotmail.com",
};
const User = ({ isLogin }) => {
  window.scrollTo(0, 0);
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();

  if (!isLogin) {
    history.replace("/connexion");
  }
  return (
    <div style={{ margin: "80px 60px 60px 60px" }}>
      <header className={classes.header}>
        <div>
          <Typography component="p" variant="h5">
            Bonjour {datas.name}
          </Typography>
          <Typography
            onClick={() => setIsEdit(!isEdit)}
            component="p"
            variant="subtitle2"
            color="textSecondary">
            Modifier mon compte
          </Typography>
          <Typography component="p" variant="subtitle2">
            {datas.email}
          </Typography>
          <Typography component="p" variant="subtitle2">
            Inscrit depuis {datas.inscription}
          </Typography>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="secondary">
            Déconnexion
          </Button>
        </div>
        <Avatar className={classes.avatar}>
          {datas.name[0].toUpperCase()}
        </Avatar>
      </header>

      <main className={classes.main}>
        <section>
          <form>
            <TextField
              className={classes.form}
              variant="outlined"
              value={datas.name}
              disabled={!isEdit}
            />
            <TextField
              className={classes.form}
              variant="outlined"
              value={datas.password}
              disabled={!isEdit}
            />
            <Button
              type="submit"
              className={classes.button}
              size="small"
              variant="contained"
              color="secondary"
              disabled={!isEdit}>
              Modifier
            </Button>
          </form>
        </section>
        <section>
          <Restorer />
        </section>
      </main>
    </div>
  );
};

User.propTypes = {};

export default User;
