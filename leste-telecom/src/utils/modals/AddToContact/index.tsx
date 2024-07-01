import { StatesAction } from "@/Components/ButtonToFooter";
import { useContextGlobal } from "@/Components/Context";
import { contacts } from "@/services/getLesteTelecom";
import { Contact } from "@/types/interfaces/contact";
import { Box, Button, Flex, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react";
import { Fragment, useState } from "react";

export function AddContactModal({ isOpen, onOpen, onClose } : StatesAction) {
    const [newContact, setNewContact] = useState<Contact>({
        id: Date.now(),
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        language: "",
        avatar: "",
        birthday: ""
    });

    const { AddContact } = useContextGlobal();

    const formatBirthday = (value: string) => {
        const cleaned = value.replace(/\D+/g, '');
        const match = cleaned.match(/^(\d{4})(\d{0,2})(\d{0,2})$/);

        if (match) {
            return `${match[1]}${match[2] ? '-' + match[2] : ''}${match[3] ? '-' + match[3] : ''}`;
        }
        return value;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        let formattedValue = value;
        if (name === "birthday") {
            formattedValue = formatBirthday(value);
        }

        setNewContact({ ...newContact, [name]: formattedValue });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        AddContact(newContact);
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
        onClose(); // Fechar modal após submissão
    };

    return (
        <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"black.50"} display={"flex"} boxShadow={"none"}>
                <ModalHeader display={"flex"} justifyContent={"center"}>
                    <Text display={"flex"} alignItems={"center"} fontSize={"1.5rem"}>
                        Adicione um novo contato
                    </Text>
                </ModalHeader>
                <ModalBody>
                    <Box as="form" onSubmit={handleSubmit}>
                        <Flex justify={"center"} gap={4}>
                        <Box>
                        <Text>First Name</Text>
                        <Input
                            w={"100%"}
                            name="first_name"
                            value={newContact.first_name}
                            onChange={handleChange}
                            mb={"1rem"}
                            type="text"
                            placeholder="Nome"
                            _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                        />
                        </Box>

                        <Box>
                        <Text>Last Name</Text>
                        <Input
                            w={"100%"}
                            name="last_name"
                            value={newContact.last_name}
                            onChange={handleChange}
                            mb={"1rem"}
                            type="text"
                            placeholder="Sobrenome"
                            _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                        />
                        </Box>
                        </Flex>

                        <Text>Data de nascimento</Text>
                        <Input
                            name="birthday"
                            value={newContact.birthday}
                            onChange={handleChange}
                            mb={"1rem"}
                            type="text"
                            placeholder="YYYY-MM-DD"
                            maxLength={10}
                            _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                        />

                        <Text>Idioma</Text>
                        <Select
                            name="language"
                            value={newContact.language}
                            onChange={handleChange}
                            mb={"1rem"}
                            _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                        >
                            {contacts.map((item, idx) => (
                                <Fragment key={idx}>
                                    <option value={item.language}>{item.language}</option>
                                </Fragment>
                            )) }
                        </Select>

                        <Text>Email</Text>
                        <Input
                            name="email"
                            value={newContact.email}
                            onChange={handleChange}
                            mb={"1rem"}
                            type="text"
                            placeholder="Email"
                            _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                        />

                        <Text>Avatar URL</Text>
                        <Input
                            name="avatar"
                            value={newContact.avatar}
                            onChange={handleChange}
                            mb={"1rem"}
                            type="url"
                            placeholder="Avatar URL"
                            _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                        />

                        <Text>Gênero</Text>
                        <Select
                            name="gender"
                            value={newContact.gender}
                            onChange={handleChange}
                            placeholder="Select Gender"
                            mb={"1rem"}
                        >
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </Select>

                        <Flex gap={6}>
                        <Button 
                            type="submit" 
                            gap={1} 
                            _hover={{ 
                                bg: 'green.green700' 
                            }} 
                            color={"white"} 
                            w={"100%"} 
                            bg={"green.green500"}
                        >
                            Adicionar
                        </Button>

                        <Button 
                            _hover={{ 
                                bg: 'red.900' 
                            }} 
                            onClick={onClose} 
                            gap={1} 
                            w={"100%"} 
                            color='black.100' 
                            bg='red.700'
                        >
                        Cancelar
                    </Button>
                        </Flex>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
