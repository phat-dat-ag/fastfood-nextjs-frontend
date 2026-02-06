import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ToolbarSpacer from "./ToolbarSpacer";
import { ADMIN_NAVBAR_ITEMS } from "@/app/constants/layout.constants";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) =>
    prop !== "open" && prop !== "drawerMaxWidth" && prop !== "drawerMinWidth",
})<{
  open: boolean;
  drawerMaxWidth: number;
  drawerMinWidth: number;
}>(({ open, drawerMaxWidth, drawerMinWidth }) => ({
  width: open ? drawerMaxWidth : drawerMinWidth,
  "& .MuiDrawer-paper": {
    width: open ? drawerMaxWidth : drawerMinWidth,
  },
}));

const getButtonSx = (open: boolean) => ({
  minHeight: 48,
  px: 2.5,
  justifyContent: open ? "initial" : "center",
});

const getIconSx = (open: boolean) => ({
  minWidth: 0,
  justifyContent: "center",
  mr: open ? 3 : "auto",
});

const getTextSx = (open: boolean) => ({
  opacity: open ? 1 : 0,
});

interface AdminDrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
  drawerMaxWidth: number;
  drawerMinWidth: number;
}
export default function AdminDrawer({
  open,
  handleDrawerClose,
  drawerMaxWidth,
  drawerMinWidth,
}: AdminDrawerProps) {
  return (
    <Drawer
      variant="permanent"
      open={open}
      drawerMaxWidth={drawerMaxWidth}
      drawerMinWidth={drawerMinWidth}
    >
      <ToolbarSpacer>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </ToolbarSpacer>
      <Divider />
      <List>
        {ADMIN_NAVBAR_ITEMS.map((navbarItem) => {
          const Icon = navbarItem.icon;

          return (
            <ListItem
              key={navbarItem.path}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton sx={getButtonSx(open)}>
                <ListItemIcon sx={getIconSx(open)}>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={navbarItem.title} sx={getTextSx(open)} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
