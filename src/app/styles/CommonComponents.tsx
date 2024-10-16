import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";

export const LayoutBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  border: "1px solid red",
  maxWidth: "30rem",
  [theme.breakpoints.down("sm")]: {
    margin: "40px",
  },
}));

export const MainContainer = styled(Box)({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const CancelButton = () => {
  const router = useRouter();

  return (
    <Box sx={{ alignSelf: "center" }} mt={1}>
      <Button onClick={() => router.back()} variant="text" size="large">
        Cancel
      </Button>
    </Box>
  );
};

export const BackButton = () => {
  const router = useRouter();

  return (
    <Box sx={{ top: "40px", left: "40px", position: "absolute" }}>
      <Button
        onClick={() => router.back()}
        sx={{ color: "#A6A6A6" }}
        variant="text"
        size="small"
        startIcon={<ArrowBackIosIcon fontSize="small" />}
      >
        Back
      </Button>
    </Box>
  );
};
