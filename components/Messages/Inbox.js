/* eslint-disable @next/next/link-passhref */
import { useEffect, useState } from "react";
import { Messages } from "@libs/api";
import { Link } from "react-router-dom";

export default function Inbox() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await Messages.message("inbox");
    if (response.status === "error") {
      return setMessages([]);
    }
    setMessages(response);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <div className="bg-white rounded-md p-3">
        <div className="message_container p-2">
          <div className="message_list">
            <h4 className="font-bold my-2 py-2 capitalize text-xl">Inbox</h4>
            <hr />
            <ul>
              {messages.map((item) => (
                <Link to={`/inbox/${item.id}`} key={item.id}>
                  <li className=" border-b-2 py-2 cursor-pointer">
                    <div className="flex justify-between">
                      <h4 className="font-bold py-1">
                        {item.sender.name}{" "}
                        <small className=" text-xs ">(SPM)</small>
                      </h4>
                      <span>01-03-2022</span>
                    </div>
                    <span>{item.body.slice(0, 100) + "..."}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
