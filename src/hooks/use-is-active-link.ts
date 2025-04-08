"use client";

import { usePathname } from "next/navigation";

/**
 * Determines if a given route should be considered active based on the current URL.
 *
 * @returns {(routePath: string) => boolean} - A function that checks if a route is active.
 */
export const useIsActiveRoute = () => {
  const pathname = usePathname();

  /**
   * Checks if a route is active.
   * - If on `/dashboard`, only `/dashboard` is active.
   * - If on `/dashboard/properties`, then `properties` is active.
   * - If on `/dashboard/settings`, then `settings` is active, and `/dashboard` is not.
   *
   * @param {string} routePath - The route path to check.
   * @returns {boolean} - Whether the route should be considered active.
   */
  const isActiveRoute = (routePath: string): boolean => {
    if (!pathname) return false;

    // Special handling for `/dashboard` and its subpaths
    if (pathname.startsWith("/dashboard")) {
      if (routePath === "/dashboard") {
        return pathname === "/dashboard";
      }

      return pathname.startsWith(routePath);
    }

    return pathname === routePath;
  };

  return isActiveRoute;
};
