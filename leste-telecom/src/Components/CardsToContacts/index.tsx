import { Content } from "@/services/ficticio";
import { DeleteCardModal } from "@/utils/modals/DeleteContact";
import { EditCardModal } from "@/utils/modals/EditContact";
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import { IoManSharp, IoWomanSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export function CardsContacts() {
    const [selectedProfile, setSelectedProfile] = useState<null>(null)
    const [selectedProfileDeleted, setSelectedProfileDeleted] = useState(null);
    const [isOpenDeleteCardModal, setIsOpenDeleteCardModal] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleOpenModal(profile : any) {
        console.log("Esse é o profile:", profile)
        setSelectedProfile(profile);
        setIsOpen(true);
    };

    function handleOpenModalDeleteCard(profile : any) {
        setSelectedProfileDeleted(profile);
        setIsOpenDeleteCardModal(true);
    };

    return (
        <>
            <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
                {Content.map((item, idx) => (
                    <Fragment key={idx}>
                        <Card
                            _hover={{
                                bg: 'green.green600',
                                border: 'none',
                                transition: '0.2s',
                                color: 'white'
                            }}
                            borderRadius={"12px"}
                            border={"1px solid"}
                            borderColor={"black.200"}
                            boxShadow={"none"}
                        >
                            <CardHeader justifyContent={"center"} display={"flex"} alignItems="center">
                                <Img
                                    src={item.avatar}
                                    borderRadius={"50%"}
                                    border={"2px solid"}
                                    borderColor={"black.300"}
                                />
                            </CardHeader>

                            <CardBody mt={"-2rem"}>
                                <HStack justify={"center"}>
                                    <Flex direction={"column"} justify={"center"}>
                                        <Text mb={"0.5rem"} fontSize={"1.25rem"} textAlign={"center"}>
                                            {item.first_name} {item.last_name}
                                        </Text>

                                        <Flex mb={"0.5rem"} gap={1} alignItems={"center"}>
                                        <Text fontSize={"0.85rem"} display={"flex"} gap={1} alignItems={"center"} fontWeight={"500"}>
                                                <FaBirthdayCake size={18} /> Data de nascimento:
                                        </Text>
                                        <Text gap={1} fontSize={"0.85rem"} alignItems={"center"} display={"flex"}>
                                            {item.birthday}
                                        </Text>
                                        </Flex>

                                        <Flex mb={"0.5rem"} align={"center"}>
                                        <Text gap={1} alignItems={"center"} fontWeight={"500"} fontSize={"0.85rem"} display={"flex"}>
                                            <MdEmail size={18} /> Email:
                                        </Text>
                                        <Text fontSize={"0.85rem"} fontWeight={"normal"}>{item.email}</Text>
                                        </Flex>
                                        
                                        <Text fontSize={"0.85rem"} alignItems={"center"} display={"flex"}>
                                            Gênero: {item.gender}
                                            {item.gender === 'M' ?
                                                <IoManSharp size={24} color="blue" /> : <IoWomanSharp size={24} color="purple" />
                                            }
                                        </Text>
                                    </Flex>
                                </HStack>
                            </CardBody>

                            <CardFooter borderTop={"1px solid"} borderTopColor={"black.200"} gap={12}>
                                <Button
                                    gap={1}
                                    _hover={{
                                        bg: 'green.green500',
                                        color: 'white',
                                        border: '1px solid white'
                                    }}
                                    w={"100%"}
                                    onClick={() => handleOpenModal(item)}
                                >
                                    <BiEditAlt size={20} /> Editar
                                </Button>

                                <Button
                                    _hover={{
                                        bg: 'red.700',
                                        color: 'black.100'
                                    }}
                                    gap={1}
                                    w={"100%"}
                                    onClick={() => handleOpenModalDeleteCard(item)}
                                >
                                    <BiTrash size={20} /> Deletar
                                </Button>
                            </CardFooter>
                        </Card>

                        {isOpen && (
                            <EditCardModal 
                                idx={idx} 
                                isOpen={isOpen} 
                                handleOpenModal={handleOpenModal}
                                setIsOpen={setIsOpen} 
                                profile={selectedProfile}
                            />
                        )}

                        {isOpenDeleteCardModal && (
                            <DeleteCardModal
                                isOpenDeleteCardModal={isOpenDeleteCardModal}
                                handleOpenModalDeleteCard={handleOpenModalDeleteCard}
                                profile={selectedProfileDeleted}
                                setIsOpenDeleteCardModal={setIsOpenDeleteCardModal}     
                            />
                        )}
                    </Fragment>
                ))}
            </SimpleGrid>
        </>
    )
}