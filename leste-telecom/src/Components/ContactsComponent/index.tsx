import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CardsToFilterComponent } from "../CardsToFilter";
import { CardsContacts } from "../CardsToContacts";
import ParamsContextProvider from "../Context";

export function ContactsComponent() {
    return (
        <ParamsContextProvider>
            <Box h={"100%"}>
                <Flex overflow={"hidden"} p={"1.5rem"} h={"100%"} justify={"center"}>
                    <Box h={"100%"} flex={1}> {/* Card de filtragens */}
                        <Heading p={"1rem"}>
                            <Text fontWeight={"500"} fontSize={"1rem"}>
                                Exibindo resultados: 1-6 de 540
                            </Text>
                        </Heading>
                        <CardsToFilterComponent />
                    </Box>

                    <Box
                        overflow={"auto"}
                        h={"34rem"}
                        p={"2rem"}
                        border={"1px solid"}
                        borderColor={"black.100"}
                        flex={4}
                    > {/* Cards de contatos */}
                        <CardsContacts />
                    </Box>
                </Flex>
            </Box>
        </ParamsContextProvider>
    );
}
