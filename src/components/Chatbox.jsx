import React, { useState } from 'react'
import Messages from './Messages'

const ChatBox_Response = {
    answer:
        "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
    citations: [
        {
            text:
                "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        },
    ],
}



export default function Chatbox() {

    const [question, setQuestion] = useState(
        "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?"
    );
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        if (!question.trim()) return;
        setMessages([...messages, { type: "user", text: question }]);
        setLoading(true);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    type: "bot",
                    text: ChatBox_Response.answer,
                    citation: ChatBox_Response.citations[0],
                },
            ]);
            setLoading(false);
        }, 1000); 
    };
    return (
        <>
            <div className="space-y-3 max-h-[400px]  mb-4 chatbox-scrollbar">
                {messages.map((msg, i) => (
                    <Messages key={i} message={msg} />
                ))}
                {loading && <Messages message={{ type: "bot", loading: true }} />}
            </div>

            <div className="flex flex-col gap-2">
                <textarea
                    rows={4}
                    className="border p-3 rounded-xl resize-none"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a legal question..."
                />
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="background-lexi text-black rounded-xl py-2 font-medium  disabled:opacity-50 cursor-pointer  hover:bg-lexi-hover "
                    
                >
                    {loading ? "Generating Answer..." : "Submit"}
                </button>
            </div>
        </>

    )
}
