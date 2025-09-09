import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  ADMIN: "/admin",
  LOGIN: "/login",
  MARY: "/mary",
} as const;

// export type PathParams = {
//   [ROUTES.PERSONS]: {
//     departmentId: string;
//   };
// };

declare module "react-router-dom" {
  interface Register {
    // params: PathParams;
  }
}
