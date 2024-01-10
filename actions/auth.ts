"use server"

import { db } from "@/lib/db"


export const authUser = async(value: any) => {

  console.log(value)


  const {name, email, metaAddress} = value

  const existingUser = await db.user.findUnique({where: {metaAddress}})

  if(existingUser) return {error: "user already exists use a different address smh"}


  const user = await db.user.create({
    data: {
      username: name,
      email,
      metaAddress
    }
  })


  if(user) return {success: "success"}

}