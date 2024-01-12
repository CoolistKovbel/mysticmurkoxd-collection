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
export const contractAddress = "0xcEEeade6273FB36a4724706735FA172b7E4019f0";
