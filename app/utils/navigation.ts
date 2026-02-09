import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const navigatePush = (router: AppRouterInstance, path: string) => {
  router.push(path);
};

export const navigateReplace = (router: AppRouterInstance, path: string) => {
  router.replace(path);
};
