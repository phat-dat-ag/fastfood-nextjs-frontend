import { SvgIconComponent } from "@mui/icons-material";

export interface AdminHeaderItemType {
  title: string;
  path: string;
  icon: SvgIconComponent;
}

export interface HeaderItemType {
  title: string;
  path: string;
}

export interface HeaderActionType {
  icon: SvgIconComponent;
  path: string;
}

interface FooterItemType {
  title: string;
  path: string;
}

export interface FooterSectionType {
  title: string;
  items: Array<FooterItemType>;
}
