import { Button, Flex, Img, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

export function DeleteCardModal({ isOpenDeleteCardModal, setIsOpenDeleteCardModal, profile }: any) {

    console.log("Profile em Modal:", profile);

    if (!profile) {
        return null; // Se o perfil não estiver definido, não renderize o modal
    }

    return (
        <Modal isCentered isOpen={isOpenDeleteCardModal} onClose={() => setIsOpenDeleteCardModal(false)}>
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
                        fontSize={"1.25rem"}
                    > 
                        Deseja realmente deletar este contato?
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
                        disabled
                        value={profile?.first_name}
                    />

                    <Text>Last Name </Text>
                    <Input
                        type="text"
                        disabled
                        value={profile?.last_name}
                    />
                </ModalBody>

                <ModalFooter gap={4}>
                    <Button
                        gap={1}
                        _hover={{
                            bg: 'red.900',
                        }}
                        color='black.100'
                        bg='red.700'
                        w={"100%"}
                    > 
                        <BiTrash size={20} /> Deletar
                    </Button>

                    <Button
                        onClick={() => setIsOpenDeleteCardModal(false)}
                        gap={1}
                        _hover={{
                            bg: 'green.green600'
                        }}
                        w={"100%"}
                        bg={"green.400"}
                        color={"white"}
                    > 
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
