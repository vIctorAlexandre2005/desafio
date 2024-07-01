import { Contact } from "@/types/interfaces/contact";
import { Button, Flex, Img, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

export interface InformationContactProps {
    contact: Contact;
    isOpen: boolean;
    onClose: () => void;
    handleOpenInformationsModal: (contact: Contact) => void
};

export function InformationModalContact({ isOpen, onClose, contact, handleOpenInformationsModal }: InformationContactProps) {

    console.log("contact em Modal:", contact);

    if (!contact) {
        return null; // Se o perfil não estiver definido, não renderize o modal
    }

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg={"#00000009"} />
            <ModalContent
                bg={"black.50"}
                boxShadow={"none"}
            >
                <ModalHeader display={"flex"} justifyContent={"center"}>
                    <Text
                        gap={1}
                        display={"flex"}
                        alignItems={"center"}
                        fontSize={"1.5rem"}
                    >
                        Informações
                    </Text>
                </ModalHeader>

                <ModalBody>
                    <Flex justify={"center"}>
                    <Img
                        mb={"1rem"}
                        src={contact?.avatar}
                        w={90}
                        h={90}
                        objectFit={"cover"}
                        border={"1px solid"}
                        borderColor={"black.200"}
                        borderRadius={"50%"}
                    />
                    </Flex>
                    <Text>First Name </Text>
                    <Input
                        _focus={{
                            outline: 0,
                            border: '1px solid',
                            borderColor: 'green.green600'
                        }}
                        mb={"1rem"}
                        color={"black"}
                        type="text"
                        value={contact?.first_name}
                    />

                    <Text>Last Name </Text>
                    <Input
                        type="text"
                        value={contact?.last_name}
                    />

                    <Text>Gênero </Text>
                    <Input
                        type="text"
                        value={contact?.gender}
                    />

                    <Text>Idioma</Text>
                    <Input
                        type="text"
                        value={contact?.language}
                    />

                    <Text>Email</Text>
                    <Input
                        type="email"
                        value={contact?.email}
                    />

                    <Text>Data de nascimento</Text>
                    <Input
                        type="text"
                        value={contact?.birthday}
                    />
                </ModalBody>

                <ModalFooter gap={4}>
                    <Button
                        gap={1}
                        _hover={{
                            bg: 'green.green700',
                        }}
                        color={"white"}
                        w={"100%"}
                        bg={"green.green500"}
                        onClick={onClose}
                    >
                        Concluído
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
