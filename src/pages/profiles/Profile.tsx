import React, { FormEvent, ReactElement, useState } from "react";
import "../profiles/profile.css";
import { Typography, TextField, Button } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InputAdornment from "@mui/material/InputAdornment";
import CancelIcon from "@mui/icons-material/Cancel";
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
import { SaveOutlined } from "@mui/icons-material";
import { red } from "@mui/material/colors";

export default function Profile() {
  const [editalummer, setEditalummer] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (editalummer) {
      return "LOGOUT";
    } else {
      return "SAVE";
    }
  }

  return (
    <div className="background1">
      <div className="logo-container logo">
        <img src={arrow_left_alt} />
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
      <div className="panel">
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
            disabled={editalummer}
            value="GRCFNCXXXXXXXXXX "
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CancelIcon className="cancil">
                    disabled={editalummer}
                      {" "}
                      {editalummer ? (
                        "LOGOUT"
                      ) : (
                        <>
                          <SaveOutlined />
                          {"cancil"}
                        </>
                      )}
                    </CancelIcon>
                    <img src={universal_currency} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            disabled={editalummer}
            value="No allergies"
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
              },
            }}
          />
          <TextField
            disabled={editalummer}
            value=" (555) 123-4567"
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
              },
            }}
          />
          <TextField
            disabled={editalummer}
            value="francesca.greco@example.com "
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
              },
            }}
          />
          <TextField
            disabled={editalummer}
            value="123 Vision Lane, Suite 200, Cityville, ST 12345 "
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
              },
            }}
          />
        </form>
        <Button
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
      </div>
    </div>
  );
}
