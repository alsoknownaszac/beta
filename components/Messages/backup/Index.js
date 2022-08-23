import Inbox from "./Inbox"
import Sent from "./Sent"
import Draft from "./Draft"
import Trash from "./Trash"

export default function Index({section}){

    return (
        <>
            {section === "inbox" && <Inbox />}
            {section === "sent" && <Sent />}
            {section === "draft" && <Draft />}
            {section === "trash" && <Trash />}
        </>
    )

}