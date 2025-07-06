import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
const Navbar = () => (
  <AppBar
    position="sticky"
    sx={{
      backgroundColor: "white",
      boxShadow: {
        xs: "none",
        sm: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        width: {
          xs: "100%",
          sm: "90%",
        },
        margin: {
          xs: "auto",
        },
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ ml: 2 }}>
          <span style={{ color: "#3a84b2", fontWeight: "semibold" }}>
            Equal
          </span>{" "}
          <span style={{ color: "#656d70", fontWeight: "semibold" }}>all</span>
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" gap={0.5}>
        <span>
          <LockIcon sx={{ color: "#ffb636" }} aria-label="secure lock icon" />
        </span>
        <Typography variant="body2" sx={{ color: "#9e9e9e", fontWeight: 500 }}>
          100% secure
        </Typography>
      </Box>
    </Box>
  </AppBar>
);

export default Navbar;
