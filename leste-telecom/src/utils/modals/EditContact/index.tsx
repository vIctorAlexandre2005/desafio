import { Button, Flex, Img, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";

export function EditCardModal({ isOpen, setIsOpen, profile }: any) {

    console.log("Profile em Modal:", profile);

    if (!profile) {
        return null; // Se o perfil não estiver definido, não renderize o modal
    }

    return (
        <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
                        <BiEditAlt size={24} /> Editando contato
                    </Text>
                </ModalHeader>

                <ModalBody>
                    <Img
                        mb={"1rem"}
                        src={profile?.avatar}
                        w={90}
                        h={90}
                        border={"1px solid"}
                        borderColor={"black.200"}
                        borderRadius={"50%"}
                    />
                    <Text>First Name </Text>
                    <Input
                        _focus={{
                            outline: 0,
                            border: '1px solid',
                            borderColor: 'green.green600'
                        }}
                        mb={"1rem"}
                        type="text"
                        placeholder={profile?.first_name}
                    />

                    <Text>Last Name </Text>
                    <Input
                        type="text"
                        placeholder={profile?.last_name}
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
                    > 
                        Salvar
                    </Button>

                    <Button
                        _hover={{
                            bg: 'red.900',
                        }}
                        onClick={() => setIsOpen(false)}
                        gap={1}
                        w={"100%"}
                        color='black.100'
                        bg='red.700'
                    > 
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
