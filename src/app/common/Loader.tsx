import { Box, CircularProgress } from "@mui/material";

const FullPageLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        color: "#ff3131",
      }}
    >
      <CircularProgress size={35} sx={{ color: "#ff3131" }} />
    </Box>
  );
};

export default FullPageLoader;
