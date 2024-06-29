import { FiltersComponents } from "@/utils/FiltersInCardComponent";
import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
export function CardsToFilterComponent() {
    return (
        <Card w={"16rem"} boxShadow={"none"} border={"1px solid"} borderColor={"black.100"} bg={"black.50"}>
            <CardHeader p={"0.75rem"} borderBottom={"1px solid"} borderBottomColor={"black.200"}>
                <Text textAlign={"left"} fontWeight={"600"}>Filtros</Text>
            </CardHeader>

            <CardBody>
                <FiltersComponents />
            </CardBody>
        </Card>
    )
}