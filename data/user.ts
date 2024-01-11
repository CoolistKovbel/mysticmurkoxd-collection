import { db } from "@/lib/db"

/**
 * This checks the database to see if a user with the same metadress exists.
 * 
 *
 */
export const findUserByAddress = async ( address: string) => {
  try {
    
    const user = await db.user.findUnique({ where: { metaAddress: address } });
    return user

  } catch (error) {

    console.log(error)
    return null
  }
}


/**
 * This checks the database to see if a user with the same metadress exists.
 * 
 *
 */
export const findUserByEmail = async ( email: string) => {
  try {
    
    const user = await db.user.findUnique({ where: { email } });
    return user

  } catch (error) {
    return null
  }
}

/**
 * This checks the database to see if a user with the same id exists.
 * 
 * 
 */
export const findUserById = async ( id: string) => {
  try {
    
    const user = await db.user.findUnique({ where: { id } });
    return user

  } catch (error) {
    return null
  }
}


/**
 * This checks the database to see if a user with the same signare exists.
 * 
 * 
 */
export const findUserBySignature = async ( signature: string) => {
  try {
    
    const user = await db.user.findUnique({ where: { signature } });
    return user

  } catch (error) {
    return null
  }
}
