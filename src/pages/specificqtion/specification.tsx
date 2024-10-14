import React, { useState } from "react";
import "./specification.css";
import save from "../../assets/images/specification/file_save@2x.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../../../src/components/header/Header";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { Avatar, Button, Typography } from "@mui/material";

interface Drug {
  Dosage: string;
  MethodOfAdministraion: string;
  Contraindications: string;
  Warnings: string;
  SideEffects: string;
  Interactions: string;
  Storage: string;
}

function specification() {
  const [open, setOpen] = useState<{[key: string]: boolean}>({});

  //   const handleClick = () => {
  //     setOpen(!open);
  //   };
  const handleClick = (key: string) => {
    setOpen((prev) => ({
        ...prev,
        [key]: !open[key]
    }));
  };
  //   const handleToggle = async (specification: IDose) => {
  //     try {
  //       const dose: IDose = { ...specification };
  //       dose.taken = !dose.taken;
  //       const requestOptions = {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(dose),
  //       };
  //       setErrorUpdate("");
  //       const result = await fetch(
  //         "http://localhost:3000/doses/" + dose.id,
  //         requestOptions
  //       );
  //       if (result.ok) {
  //         specification.taken = !specification.taken;
  //         const currentIndex = checked.findIndex(
  //           (x) => x.id === specification.id
  //         );
  //         const newChecked = [...checked];
  //         if (currentIndex === -1) {
  //           newChecked.push(specification);
  //         } else {
  //           newChecked.splice(currentIndex, 1);
  //         }
  //         setChecked(newChecked);
  //       }
  //     } catch {
  //       setErrorUpdate("Failed to update specification");
  //     }
  //   };
  const data: Drug = {
    Dosage: "30 mg/tablet, 1 tablet daily",
    MethodOfAdministraion: `- For ophtalmic use only
     - Shake the bottle well defore use
     - Tilt head back, pull down the lowed eyelid, and apply drops
     - Avoid touching the dropper tip to any surface, including the eye`,
    Contraindications: "none",
    Warnings: "none",
    SideEffects: "none",
    Interactions: "none",
    Storage: "room temperature",
  };
  return (
    <div className="Drop-container">
      <Header title="DROP sept" showBackButton={true} />
      <div className="panel-specification">
        <div className="head-panel">
          <div className="save">
            <Box
              sx={{
                width: "100%",
                height: "50px",
                color: "#fff",
              }}
            >
              <Button
                sx={{
                  bgcolor: "red",
                  color: "#fff",
                }}
              >
                <img src={save} alt="" />
                Information leaflet
              </Button>
              {/*<nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <img src={save} alt="" />
                      </ListItemIcon>
                      <ListItemText primary="Information leaflet" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>*/}
            </Box>
          </div>

          <Typography>
            Ophthalmic solution with anti-inflammatory activity suitable for
            cases of eye burning and conjunctivitis.
          </Typography>
        </div>
        <div className="list-container2">
          <List
            sx={{ width: "100%", display: "flex", flexDirection: "column", gap:"20px" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {Object.entries(data).map(([key, value]) => {
              return (
                <div className="drug">
                  <ListItemButton onClick={() => handleClick(key)}>
                    <ListItemText primary={key} />
                    {open[key] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open[key]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={value} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </div>
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
}

export default specification;
