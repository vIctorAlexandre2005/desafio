import { StatesAction } from "@/Components/ButtonToFooter";
import { useContextGlobal } from "@/Components/Context";
import { Contact } from "@/types/interfaces/contact";
import { Box, Button, Img, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export function AddContactModal({ isOpen, onOpen, onClose }: StatesAction) {

    const [newContact, setNewContact] = useState<Contact>({
        id: Date.now(), // Gerar um ID único
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        language: "",
        avatar: "", // Pode usar um URL padrão ou permitir upload
        birthday: ""
    })

    const { AddContact } = useContextGlobal();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        AddContact(newContact);
        // Limpar o formulário após a submissão
        setNewContact({
            id: Date.now(),
            first_name: "",
            last_name: "",
            email: "",
            gender: "",
            language: "",
            avatar: "",
            birthday: ""
        });
    };

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay onClick={onClose} />
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
                        Adicione um novo contato
                    </Text>
                </ModalHeader>

                <ModalBody>
                    <Box as="form" onSubmit={handleSubmit}>
                        <Text>First Name </Text>
                        <Input
                            _focus={{
                                outline: 0,
                                border: '1px solid',
                                borderColor: 'green.green600'
                            }}
                            mb={"1rem"}
                            type="text"
                            placeholder="Nome"
                            value={newContact.first_name}
                            onChange={handleChange}
                        />

                        <Text>Last Name </Text>
                        <Input
                            type="text"
                            mb={"1rem"}
                            placeholder="Sobrenome"
                            value={newContact.last_name}
                            onChange={handleChange}
                        />

                        <Text>Data de nascimento</Text>

                        <Input
                            _focus={{
                                outline: 0,
                                border: '1px solid',
                                borderColor: 'green.green600'
                            }}
                            mb={"1rem"}
                            type="text"
                            placeholder="Nascimento"
                            value={newContact.birthday}
                            onChange={handleChange}
                        />

                        <Text>Idioma</Text>

                        <Input
                            _focus={{
                                outline: 0,
                                border: '1px solid',
                                borderColor: 'green.green600'
                            }}
                            mb={"1rem"}
                            type="text"
                            placeholder="Idioma"
                            value={newContact.language}
                            onChange={handleChange}
                        />

                        <Select
                            name="gender"
                            placeholder="Select Gender"
                            value={newContact.gender}
                            onChange={handleChange}
                        >
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </Select>
                    </Box>
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
                        onClick={handleSubmit}
                    >
                        Adicionar
                    </Button>

                    <Button
                        _hover={{
                            bg: 'red.900',
                        }}
                        onClick={onClose}
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
