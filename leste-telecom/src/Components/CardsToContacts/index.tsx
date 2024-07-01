import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { EditCardModal } from "@/utils/modals/EditContact";
import { DeleteCardModal } from "@/utils/modals/DeleteContact";
import { CardComponent } from "./cardComponent";
import { Contact } from "@/types/interfaces/contact";
import { useContextGlobal } from "../Context";

export function CardsContacts() {

    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [selectedContactDeleted, setSelectedContactDeleted] = useState<Contact | null>(null);

    const { filteredContacts } = useContextGlobal();

    const { isOpen: isEditModalOpen, onOpen: onOpenEditModal, onClose: onCloseEditModal } = useDisclosure();
    const { isOpen: isDeleteModalOpen, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();

    function handleOpenEditModal(contact: Contact) {
        setSelectedContact(contact);
        onOpenEditModal();
    };

    function handleOpenDeleteModal(contact: Contact) {
        setSelectedContactDeleted(contact);
        onOpenDeleteModal();
    };

    useEffect(() => {
        console.log("filteredContacts in CardsContacts:", filteredContacts);
    }, [filteredContacts]);

    return (
        <>
            <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
                {filteredContacts.map((item, idx) => (
                    <Fragment key={idx}>
                        <CardComponent 
                            contact={item} 
                            onEdit={handleOpenEditModal} 
                            onDelete={handleOpenDeleteModal} 
                        />

                        {isEditModalOpen && selectedContact && (
                            <EditCardModal
                                isOpen={isEditModalOpen}
                                setIsOpen={onCloseEditModal}
                                contact={selectedContact}
                            />
                        )}

                        {isDeleteModalOpen && selectedContactDeleted && (
                            <DeleteCardModal
                                isOpenDeleteCardModal={isDeleteModalOpen}
                                handleOpenModalDeleteCard={handleOpenDeleteModal}
                                contact={selectedContactDeleted}
                                setIsOpenDeleteCardModal={onCloseDeleteModal}
                            />
                        )}
                    </Fragment>
                ))}
            </SimpleGrid>
        </>
    );
}
