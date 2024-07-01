import { contacts as initialContacts } from "@/services/getLesteTelecom";
import { Contact } from "@/types/interfaces/contact";
import { useDisclosure } from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

export interface SelectedGenderProps {
    selectedGender: string;
    setSelectedGender: Dispatch<SetStateAction<string>>;
}

export interface VariablesContextType {
    selectedGender: string;
    setSelectedGender: Dispatch<SetStateAction<string>>;
    handleGenderChange: (gender: string) => void;
    filteredContacts: Contact[];
    setFilteredContacts: Dispatch<SetStateAction<Contact[]>>;
    AddContact: (contact: Contact) => void;
}

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
    AddContact: () => { }
};

const ParamsProvider = createContext<VariablesContextType>(defaultValue);

export default function ParamsContextProvider({ children }: { children: ReactNode }) {
    const [selectedGender, setSelectedGender] = useState<string>("");
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>(initialContacts);

    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);
    };

    const AddContact = (contact: Contact) => {
        const updatedContacts = [...filteredContacts, contact];
        setFilteredContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    useEffect(() => {
        const savedContacts = localStorage.getItem('contacts');

        if (selectedGender) {
            const filteredGender = initialContacts.filter(contact => contact.gender === selectedGender);
            setFilteredContacts(filteredGender);
        } else {
            setFilteredContacts(initialContacts);
        };

        if (savedContacts) {
            setFilteredContacts(JSON.parse(savedContacts));
        };

    }, [selectedGender]);

    return (
        <ParamsProvider.Provider
            value={{
                selectedGender,
                setSelectedGender,
                filteredContacts,
                setFilteredContacts,
                handleGenderChange,
                AddContact
            }}
        >
            {children}
        </ParamsProvider.Provider>
    );
};

export const useContextGlobal = () => useContext(ParamsProvider);
