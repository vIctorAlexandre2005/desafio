import { Fragment, useState } from "react";
import { FiltersGenders } from "../filters";
import { Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { filterBirthday } from "../filters/birthday";
import { contacts } from "@/services/getLesteTelecom";
import { useContextGlobal } from "@/Components/Context";

interface FiltersComponentsProps {
    onGenderChange: (gender: string) => void;
}

export const FiltersComponents: React.FC<FiltersComponentsProps> = ({ onGenderChange }) => {
    const { selectedGender, setSelectedGender } = useContextGlobal();

    const handleGenderChangeFilter = (value: string) => {
        setSelectedGender(value);
        onGenderChange(value);
        console.log("valor clicado:", value)
    };

    return (
        <>
            {/* Filtragem por gêneros */}
            {FiltersGenders.map((item, idx) => (
                <Fragment key={idx}>
                    <Text color={"green.green500"} mb={"0.5rem"} fontSize={"1.25rem"}>{item.title}</Text>
                    <RadioGroup value={selectedGender} onChange={handleGenderChangeFilter}>
                        <Stack> 
                            <Fragment key={item.value}>
                                <Radio value={item.value}>{item.options}</Radio>
                            </Fragment>
                        </Stack>
                    </RadioGroup>
                </Fragment>
            ))}

            {/* Filtragem por Data de nascimento */}
            {filterBirthday.map((item, idx) => (
                <Fragment key={idx}>
                    <Text color={"green.green500"} mb={"0.5rem"} fontSize={"1.25rem"}>{item.title}</Text>
                    <RadioGroup defaultValue='1'>
                        <Stack>
                            <Radio value="">{item.options}</Radio>
                        </Stack>
                    </RadioGroup>
                </Fragment>
            ))}

            {/* Filtragem por Idiomas */}
            <Text color={"green.green500"} mb={"0.5rem"} fontSize={"1.25rem"}>Idiomas</Text>
            <Select>
                {contacts.map((item, idx) => (
                    <Fragment key={idx}>
                        <option>{item.language}</option>
                    </Fragment>
                ))}
            </Select>
        </>
    );
};
