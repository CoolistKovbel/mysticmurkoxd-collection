/**
 * array routes that are accessible to the public
 *
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";

/**
 * The Contract Address for the nft Minting collection
 * @type {string}
 */
export const contractAddress = "0x95790A17f7177b1B534Ed76D493E33094988c100";
