import { contacts as initialContacts } from "@/services/getLesteTelecom";
import { Contact } from "@/types/interfaces/contact";
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
    const [contacts, setContacts] = useState<Contact[]>(initialContacts);
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>(initialContacts);

    useEffect(() => {
        const savedContacts = localStorage.getItem('contacts');

        if (savedContacts) {
            const parsedContacts = JSON.parse(savedContacts);
            setContacts(parsedContacts);
            setFilteredContacts(parsedContacts);
        };

    }, []);

    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);
    };

    const AddContact = (contact: Contact) => {
        const updatedContacts = [...contacts, contact];
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    useEffect(() => {
        if (selectedGender) {
            const filteredGender = contacts.filter(contact => contact.gender === selectedGender);
            setFilteredContacts(filteredGender);
        } else {
            setFilteredContacts(contacts);
        }
    }, [selectedGender, contacts]);

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
