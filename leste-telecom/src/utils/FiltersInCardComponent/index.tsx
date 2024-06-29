import { Fragment } from "react"
import { FiltersGenders } from "../filters"
import { Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react"
import { filterBirthday } from "../filters/birthday"
import { LanguagesContactsFilters } from "../filters/languages/languages"

export function FiltersComponents() {
    return (
        <>
            {/* Abaixo segue o conteúdo de filtragem por gêneros */}
            {FiltersGenders.map((item, idx) => (
                <Fragment key={idx}>
                    <Text color={"green.green500"} mb={"0.5rem"} fontSize={"1.25rem"}>{item.title}</Text>
                    <RadioGroup defaultValue={item.value} >
                        <Stack>
                            <Radio value={item.value}>{item.options}</Radio>
                        </Stack>
                    </RadioGroup>
                </Fragment>
            ))}
            
            {/* Abaixo segue o conteúdo de filtragem por Data de nascimento */}
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

            {/* Abaixo segue o conteúdo de filtragem por Idiomas */}
            <Text color={"green.green500"} mb={"0.5rem"} fontSize={"1.25rem"}>Idiomas</Text>
            <Select>
            {LanguagesContactsFilters.map((item, idx) => (
               <Fragment key={idx}>
                <option>{item.options}</option>
               </Fragment> 
            ))}
            </Select>
        </>
    )
}