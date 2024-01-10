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
  name: z.string().min(1, {
    message: "group name required",
  }),
  email: z.string().email(),
  metaAddress: z.string(),
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