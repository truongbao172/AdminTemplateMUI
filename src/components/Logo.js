import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/">
      <Box
        component="img"
        src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/logo.png"
        sx={{ width: 160, height: 50, ...sx }}
      />
    </RouterLink>
  );
}
