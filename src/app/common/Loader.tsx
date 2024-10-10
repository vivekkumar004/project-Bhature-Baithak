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
      }}
    >
      <CircularProgress size={25} />
    </Box>
  );
};

export default FullPageLoader;