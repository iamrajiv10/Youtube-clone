import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomName } from '../Utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(()=> {
        const i = setInterval(() => {

            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: "Lorem Ipsum Dolor Site Amet🚀"
                })
            )
        }, 2000);

        return () => clearInterval(i);
    }, []);
  return (
    <div>
    <div className="w-full h-[450px] mx-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c,index) => (
      <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
    <form className="w-full p-2 ml-2 border border-black"
    onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: "Rajiv",
            message: liveMessage
        }))
        setLiveMessage("");
    }}>
        <input className='w-96 border border-black' type='text'
        value={liveMessage} 
        onChange={(e) => {
            setLiveMessage(e.target.value);
        }} />
        <button className='px-2 mx-2 bg-green-200'>Send</button>
    </form>
    </div>
  )
}

export default LiveChat
