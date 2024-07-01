import { AddContactModal } from "@/utils/modals/AddToContact";
import { Button, useDisclosure } from "@chakra-ui/react";
import { TbMessagePlus } from "react-icons/tb";
import { useContextGlobal } from "../Context";
import { useState } from "react";
import { Contact } from "@/types/interfaces/contact";

export interface StatesAction {
    isOpen: boolean,
    onOpen: () => void;
    onClose: () => void
}

export function ScrollToTopButton() {
    const { 
        isOpen: isAddContactModal, 
        onOpen: onOpenAddContactModal, 
        onClose: onCloseAddContactModal 
    } = useDisclosure();

    return (
        <>
            <Button
                position="fixed"
                bottom="3rem"
                right="3rem"
                bg="green.green500"
                color="white"
                borderRadius="full"
                padding="1.5rem"
                _hover={{ background: 'green.green600', transition: '0.2s' }}
                cursor={"pointer"}
                zIndex={999}
                onClick={onOpenAddContactModal}
            >
                <TbMessagePlus size={24} />
            </Button>

            {isAddContactModal && (
                <AddContactModal 
                    isOpen={isAddContactModal} 
                    onOpen={onOpenAddContactModal} 
                    onClose={onCloseAddContactModal} 
                />
            )}
        </>
    );
}
