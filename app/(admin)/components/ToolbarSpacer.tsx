"use client";

import { styled } from "@mui/material/styles";

const ToolbarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export default ToolbarSpacer;
