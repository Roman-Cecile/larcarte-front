import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import imageRandom from "../../images/bistrot.jpg";
import { useHistory } from "react-router-dom";
import { MoreVert } from "@material-ui/icons";

import useStyles from "../../styles/User/restaurantList";
// import useResponsive from "../../utils/personalHooks/responsive";

const restaurants = [
  {
    name: "Le magnifique",
    img: imageRandom,
    city: "Montpellier",
    address: "30 rue ray charles",
    id: "3345",
  },
];

const options = [
  {
    fr: "Modifier",
    en: "edit",
  },
  {
    fr: "Supprimer",
    en: "delete",
  },
];

const RestaurantList = (props) => {
  const history = useHistory();
  const classes = useStyles();
  //   const isMobile = useResponsive();
  const [currentRestaurant, setCurrentRestaurant] = React.useState({
    name: "",
    img: "",
    city: "",
    address: "",
    id: null,
  });
  const [editRestaurant, setEditRestaurant] = React.useState({});

  const isEdited = Object.keys(currentRestaurant).some(
    (current) => restaurants[0][current] !== editRestaurant[current]
  );

  const isEmpty = Object.keys(editRestaurant).some(
    (current) => editRestaurant[current] === ""
  );

  // Menu params
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  // Modal params
  const [openModal, setOpenModal] = React.useState(false);
  const [target, setTarget] = React.useState({
    element: "edit",
    restaurant: null,
  });

  const handleEdit = (event, key) => {
    if (event.target.value === "") {
      setEditRestaurant((prevState) => ({
        ...prevState,
        [key]: currentRestaurant[key],
      }));
      return;
    }
    setEditRestaurant((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };

  const handleClick = (event, restaurant) => {
    setCurrentRestaurant(restaurant);
    setEditRestaurant(restaurant);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Modal to delete restaurant
  const deleteComponent = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Supprimer {currentRestaurant.name} ?</h2>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("Attention cette action est irréversible")) {
              console.log("supprimer");
            } else {
              setOpenModal(false);
            }
          }}>
          Supprimer
        </Button>
        <Button
          onClick={() => setOpenModal(false)}
          variant="contained"
          color="primary">
          Annuler
        </Button>
      </ButtonGroup>
    </div>
  );

  // Modal to edit restaurant
  const editComponent = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Modifier {currentRestaurant.name}</h2>

      <form>
        {Object.keys(currentRestaurant).map((curr) => (
          <TextField
            key={currentRestaurant[curr]}
            onChange={(event) => handleEdit(event, curr)}
            variant="outlined"
            fullWidth
            style={{ margin: 4 }}
            placeholder={currentRestaurant[curr]}
          />
        ))}
        <Button
          disabled={!isEdited || isEmpty}
          style={{ margin: 10 }}
          variant="contained"
          color="primary"
          type="submit">
          Valider
        </Button>
      </form>
    </div>
  );

  // Dispatch component according to user choice in hooks target.element
  const dispatchComponent = {
    edit: editComponent,
    delete: deleteComponent,
  };
  return (
    <div style={{ marginTop: 20 }}>
      <Typography>Mes restaurants</Typography>
      <List>
        {restaurants.map((restaurant) => (
          <>
            <ListItem
              key={restaurant.id}
              alignItems="flex-start"
              onClick={() => history.push(`/restaurant/${restaurant.name}`)}>
              <ListItemAvatar>
                <Avatar src={restaurant.img} />
              </ListItemAvatar>
              <ListItemText
                primary={restaurant.name}
                secondary={
                  <Typography
                    style={{ display: "inline" }}
                    component="span"
                    variant="subtitle2"
                    color="textSecondary">
                    {restaurant.city}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={(event) => handleClick(event, restaurant)}
                  edge="end"
                  aria-label="delete">
                  <MoreVert />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider style={{ marginBottom: 20 }} />
          </>
        ))}
      </List>

      {/* Menu selection */}
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={openMenu}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}>
        {options.map((option) => (
          <MenuItem
            key={option.en}
            onClick={() => {
              setTarget({ element: option.en, restaurant: currentRestaurant });
              setOpenModal(true);
              handleClose();
            }}>
            {option.fr}
          </MenuItem>
        ))}
      </Menu>

      {/* Edit or Delete */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {dispatchComponent[target.element]}
      </Modal>
    </div>
  );
};

RestaurantList.propTypes = {};

export default RestaurantList;
