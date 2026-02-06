"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import AdminHeader from "./components/AdminHeader";
import AdminDrawer from "./components/AdminDrawer";
import ToolbarSpacer from "./components/ToolbarSpacer";
import {
  ADMIN_DRAWER_MAX_WIDTH_PX,
  ADMIN_DRAWER_MIN_WIDTH_PX,
} from "../constants/layout.constants";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AdminHeader
        open={open}
        onOpen={handleDrawerOpen}
        drawerWidth={ADMIN_DRAWER_MAX_WIDTH_PX}
      ></AdminHeader>
      <AdminDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerMaxWidth={ADMIN_DRAWER_MAX_WIDTH_PX}
        drawerMinWidth={ADMIN_DRAWER_MIN_WIDTH_PX}
      ></AdminDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ToolbarSpacer />
        {children}
      </Box>
    </Box>
  );
}
