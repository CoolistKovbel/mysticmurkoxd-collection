import * as z from "zod";

/**
 * This is a schema that looks for the name, cost, and image to create a server on the blockchain
 * 
 * @type {string{}}
 */
export const CreateServerSchema = z.object({
  name: z.string().min(1, {
    message: "group name required",
  }),
  cost: z.string().min(1, {
    message: "make sure the price is good",
  }),
  imageUrl: z.any(),
});

/**
 * This is a schema that authenicated new users to register their username name and email
 * 
 * @type {string{}}
 */
export const UserFormSchema = z.object({
  name: z.string().min(4, {
    message: "username required smh sneaky",
  }),
  email: z.string().email(),
  metaAddress: z.string(),
  signature: z.string(),
});


/**
 * This is a schema that authenicated new users to register their username name and email
 * 
 * @type {string{}}
 */
export const UserLoginSchema = z.object({
  metaAddress: z.string(),
  signature: z.string(),
});

/**
 * This is a schema that creates a channel that will be sent to database instead of blockchain
 * 
 * @type {string{}}
 */
export const CreateChannelSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "channel name required",
    })
    .refine((name) => name !== "general", {
      message: "Channel name connot be 'general' ",
    }),
});

/**
 * This is schema to see how much options
 * 
 * @type {string{}}
 */
export const MintSchema = z.object({
  amount: z.string(),
});

/**
 * This is setting shcema where it will check if there is value or not instead of expecting.
 * 
 * @type {string{}}
 */
export const UserSettingsSchema = z.object({
  email: z.optional(z.string()),
  username: z.optional(z.string().min(5, {message: "please dont just write random letters...."})),
  userImage: z.optional(z.any())
})

/**
 * This is is for making sure user sends a good enough message..
 * 
 * @type {string{}}
 */
export const AnnounceFormSchema = z.object({
  message: z
    .string()
    .min(1, "message is required")
    .max(255, "sorry you hit max characters"),
});