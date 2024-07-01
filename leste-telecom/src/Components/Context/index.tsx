import { contacts } from "@/services/getLesteTelecom";
import { Contact } from "@/types/interfaces/contact";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

// Definindo o tipo para o gênero selecionado
export interface SelectedGenderProps {
    selectedGender: string;
    setSelectedGender: Dispatch<SetStateAction<string>>;
}

// Definindo o tipo do contexto
export interface VariablesContextType {
    selectedGender: string;
    setSelectedGender: Dispatch<SetStateAction<string>>;
    handleGenderChange: (gender: string) => void;
    filteredContacts: Contact[];
    setFilteredContacts: Dispatch<SetStateAction<Contact[]>>;
}

// Valor padrão do contexto
const defaultValue: VariablesContextType = {
    selectedGender: "",
    setSelectedGender: () => {
        throw new Error("setSelectedGender function is not implemented");
    },
    handleGenderChange: () => {
        console.log("a");
    },
    filteredContacts: [],
    setFilteredContacts: () => {
        throw new Error("setFilteredContacts function is not implemented");
    },
}

// Criando o contexto
const ParamsProvider = createContext<VariablesContextType>(defaultValue);

// Componente que envolve a aplicação para prover o contexto
export default function ParamsContextProvider({ children }: { children: ReactNode }) {
    const [selectedGender, setSelectedGender] = useState<string>("");
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);

    // Função para alterar o gênero selecionado
    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);
    };

    useEffect(() => {
        console.log("contacts:", contacts); // Adicione esse log
        console.log("selectedGender:", selectedGender);

        if (selectedGender) {
            const filteredGender = contacts.filter(contact => contact.gender === selectedGender);
            setFilteredContacts(filteredGender);
            console.log("filteredGender:", filteredGender); // Adicione esse log
        } else {
            setFilteredContacts(contacts);
            console.log("filteredContacts:", contacts); // Adicione esse log
        }
    }, [selectedGender]);

    return (
        <ParamsProvider.Provider
            value={{
                selectedGender,
                setSelectedGender,
                filteredContacts,
                setFilteredContacts,
                handleGenderChange,
            }}
        >
            {children}
        </ParamsProvider.Provider>
    );
};

// Hook para utilizar o contexto
export const useContextGlobal = () => useContext(ParamsProvider);
