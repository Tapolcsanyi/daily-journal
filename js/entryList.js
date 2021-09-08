import { getJournalEntries } from "./entryData.js"
import { Entry } from "./entry.js"


const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    
    const contentElement = document.querySelector(".entryList")
    const entries = getJournalEntries()

    let entryHTML = "";
    for (const entry of entries) {
        entryHTML += Entry(entries);
    }
contentElement.inner += entryHTML
}