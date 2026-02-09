export const ADMIN_ROUTES = {
  HOME: "/admin",
  USER_MANAGEMENT: "/admin/user-management",
  PRODUCT_MANAGEMENT: "/admin/product-management",
} as const;

export const USER_ROUTES = {
  HOME: "/user",
  PROMOTION: "/user/promotion",
  CHALLENGE: "/user/challenge",
  ABOUT_US: "/user/about-us",
  CART: "/user/cart",
  ORDER_TRACKING: "/user/order-tracking",
} as const;
