import React, { createContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

const SnackbarContext = createContext({});

const SnackbarProvider = ({ children }) => {
  const [snack, setSnack] = useState({
    message: "",
    severity: "",
    open: false,
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnack({
      message: "",
      severity: "",
      open: false,
    });
  };

  const snackbarContextValue = {
    snack,
    setSnack,
  };

  return (
    <SnackbarContext.Provider value={snackbarContextValue}>
      {children}
      <Snackbar
        open={snack.open}
        onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={snack.severity} sx={{ width: "100%" }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => React.useContext(SnackbarContext);

export { SnackbarProvider, useSnackbar };
