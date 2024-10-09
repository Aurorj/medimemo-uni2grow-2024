import React, { FormEvent, ReactElement, useState } from "react";
import "../profiles/profile.css";
import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LogoutIcon from "@mui/icons-material/Logout";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InputAdornment from "@mui/material/InputAdornment";
import CancelIcon from "@mui/icons-material/Cancel";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import avatar from "../../assets/images/profile/avatar.svg";
import allergies from "../../assets/images/profile/allergies.png";
import arrow_left_alt from "../../assets/images/profile/arrow_left_alt.png";
import call from "../../assets/images/profile/call.png";
import edit from "../../assets/images/profile/edit.png";
// import Group from "../assets/Group.png";
import home from "../../assets/images/profile/home.png";
import mail from "../../assets/images/profile/mail.png";
// import photo_camera from "../assets/photo_camera.png";
// import save from "../assets/save.png";
import universal_currency from "../../assets/images/profile/universal_currency.png";
import { ReportOutlined, SaveOutlined } from "@mui/icons-material";
import { red } from "@mui/material/colors";

interface User {
  medicalID: string; // Propriété de type string
  allergies: string; // Propriété de type string
  callNumber: string; // Propriété de type number
  Email: string; // Propriété de type boolean
  Adresse: string;
}

const newUser: User = {
  medicalID: "GRCFNCXXXXXXXXXX",
  allergies: "No allergies",
  callNumber: "(555) 123-4567",
  Email: "falfrancesca.greco@example.comse",
  Adresse: "123 Vision Lane, Suite 200, Cityville, ST 12345",
};

export default function Profile() {
  const navigate = useNavigate();
  const [editalummer, setEditalummer] = useState(true);
  const [formData, setFormData] = useState(newUser);
  const [open, setOpen] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  const handleClean =  (name:string ) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (editalummer) {
      return "LOGOUT";
    } else {
      return "SAVE";
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="background1">
      <div className="logo-container logo">
        <img
          onClick={() => {
            navigate("/medications");
          }}
          src={arrow_left_alt}
        />

        <Typography>My Profil</Typography>
        {editalummer ? (
          <img
            src={edit}
            onClick={() => {
              setEditalummer(false);
            }}
          />
        ) : (
          <img />
        )}
      </div>
      <div className="profile-panel">
        <div className="head">
          <div className="contonainer-photo">
            <img src={avatar} width={150} height={150} />
            <div className="photo-camera">
              {" "}
              <PhotoCameraIcon />
            </div>
          </div>
          <Typography variant="h5">Francesca Greco</Typography>
        </div>
        <form className="formulaire" onSubmit={handleSubmit}>
          <TextField
            label={!editalummer ? "medicalID" : null}
            name="medicalID"
            onChange={handleChange}
            color="error"
            disabled={editalummer}
            value={formData.medicalID}
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <img src={universal_currency} />
                  </InputAdornment>
                ),
                 endAdornment: (
                      <>
                        {!editalummer && (
                          <>
                            {formData.medicalID != "" && (
                              <IconButton
                                sx={{ color: "#F00", p: "0px" }}
                                onClick={() => handleClean("medicalID")}
                              >
                    <CancelIcon className="cancil" />
                              </IconButton>
                            )}
                          </>
                        )}
                      </>
                    ),
              },
            }}
          />
          <TextField
            label={!editalummer ? "allergies" : null}
            name="allergies"
            onChange={handleChange}
            disabled={editalummer}
            value={formData.allergies}
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <img src={allergies} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <>
                    {!editalummer && (
                      <>
                        {formData.allergies != "" && (
                          <IconButton
                            sx={{ color: "#F00", p: "0px" }}
                            onClick={() => handleClean("allergies")}
                          >
                <CancelIcon className="cancil" />
                          </IconButton>
                        )}
                      </>
                    )}
                  </>
                ),
              },
            }}
          />         
          <TextField
            label={!editalummer ? "callNumber" : null}
            name="callNumber"
            onChange={handleChange}
            disabled={editalummer}
            value={formData.callNumber}
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <img src={call} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <>
                    {!editalummer && (
                      <>
                        {formData.callNumber != "" && (
                          <IconButton
                            sx={{ color: "#F00", p: "0px" }}
                            onClick={() => handleClean("callNumber")}
                          >
                <CancelIcon className="cancil" />
                          </IconButton>
                        )}
                      </>
                    )}
                  </>
                ),
              },
            }}
          />
          <TextField
            label={!editalummer ? "Email" : null}
            name="Email"
            onChange={handleChange}
            disabled={editalummer}
            value={formData.Email}
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <img src={mail} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <>
                    {!editalummer && (
                      <>
                        {formData.Email != "" && (
                          <IconButton
                            sx={{ color: "#F00", p: "0px" }}
                            onClick={() => handleClean("Email")}
                          >
                <CancelIcon className="cancil" />
                          </IconButton>
                        )}
                      </>
                    )}
                  </>
                ),
              },
            }}
          />
          <TextField
            label={!editalummer ? "Adresse" : null}
            name="Adresse"
            onChange={handleChange}
            disabled={editalummer}
            value={formData.Adresse}
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <img src={home} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <>
                    {!editalummer && (
                      <>
                        {formData.Adresse != "" && (
                          <IconButton
                            sx={{ color: "#F00", p: "0px" }}
                            onClick={() => handleClean("Adresse")}
                          >
                <CancelIcon className="cancil" />
                          </IconButton>
                        )}
                      </>
                    )}
                  </>
                ),
              },
            }}
          />
        </form>
        <React.Fragment>
          <Button
            onClick={handleClickOpen}
            className="bouton"
            type="submit"
            variant="contained"
            fullWidth
            style={{ backgroundColor: "red" }}
          >
            {editalummer ? (
              "LOGOUT"
            ) : (
              <>
                <SaveOutlined />
                {"SAVE"}
              </>
            )}
          </Button>
          <div className="dialog-header">
            {" "}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle
                variant="h6"
                id="alert-dialog-title"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  gap:"10px"
                }}
              >
                <ErrorOutlineIcon />
                {"Log-Out Confirmation"}
              </DialogTitle>

              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to log out?any unsaved changeswill be
                  lost
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  autoFocus
                  style={{ color: "black" }}
                >
                  <ArrowBackIosIcon /> Back{" "}
                </Button>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                  style={{ color: "red" }}
                >
                  <LogoutIcon />
                  Log-Out
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}
