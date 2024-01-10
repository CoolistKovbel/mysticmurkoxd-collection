
"use client"

import { useEffect, useState } from "react"
import { CreateServerModal } from "../modals/create-server-modal"
import { CreateGroupModal } from "../modals/create-group-modal"
import { AuthUserModal } from "../modals/auth-user-modal"


export const ModalProvider = () => {

    const [ isMounted, setIsmounted] = useState(false)


    useEffect(() => {
        setIsmounted(true)
    },[])


    if(!isMounted){
        return null
    }

    return (
        <>
            <CreateServerModal />
            <CreateGroupModal />
            <AuthUserModal />
        </>
    )
}