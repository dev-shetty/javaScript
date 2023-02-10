import React, { useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export function useContacts() {
  return useContext(ContactsContext)
}

const ContactsContext = React.createContext()
export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", [])

  function createContact(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }]
    })
  }
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}
