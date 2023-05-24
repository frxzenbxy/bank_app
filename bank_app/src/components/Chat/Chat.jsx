import arrow from "../../assets/arrow.png";
import React, {useState} from "react";
import ClientMessage from "./ClientMessage.jsx";
import ManagerMessage from "./ManagerMessage.jsx";
import chat2 from "../../assets/chat2.png"



const Chat = () => (

    <>
        <div className="mx-12 my-6 bg-white fixed bottom-0 border-2 right-0 z-[6] overflow-auto rounded">
            <button className={'btn'}>
                <img src={chat2} width={65} height={65} alt={"chat"}>
                </img>
            </button>
            <div className=' bg-white rounded h-[40rem] w-96 p-4 border-4 border-b-amber-50 flex flex-col py-4 px-4'>
                <div className='flex justify-between items-center '>
                    <div className='px-4 py-2'>
                        <button className="text-xs"><img src={arrow} width={20} height={20} alt={'back'}/></button>
                    </div>
                </div>
                {/*Manager info*/}
                <div className='flex bg-blue-gradient justify-center  rounded my-6'>
                    <div className='flex flex-col justify-center text-center'>
                        <p className='font-semibold'>Александр</p>
                        <p className="text-xs opacity-60 ">В сети</p>
                    </div>
                </div>

                {/*Customer Messages*/}

                <ClientMessage/>

                {/*Manager Messages*/}

                <ManagerMessage/>

                {/* Grow */}
                <div className='grow'></div>
                {/*Message Input */}
                <div className='py-4 px-2 '>
                    <input type="text" className="form-control w-full flex outline-none " placeholder="Сообщение"
                           aria-describedby="basic-addon2"></input>
                </div>
            </div>

        </div>
    </>

);

export default Chat;
