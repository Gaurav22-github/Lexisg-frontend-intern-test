import React from 'react'

export default function Messages({message}) {

    if (message.loading) {
    return (
      <div className="flex justify-start">
        <div className="bg-gray-200 px-4 py-2 rounded-xl max-w-[75%] animate-pulse">
          Thinking...
        </div>
      </div>
    );
  }

  const User = message.type === "user";
  return (
     <div className={`flex ${User ? "justify-end" : "justify-start"}`}>
          <div
        className={`px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-line ${
          User ? "background-lexi text-black" : "bg-gray-200 text-gray-900"
        }`}
      >
        {message.text}

        {!User && message.citation && (
          <div className="mt-2 text-sm text-blue-700 underline">
            <a href={message.citation.link} target="_blank" rel="noopener noreferrer">
              📄 {message.citation.text}
            </a>
          </div>
        )}
      </div>
     </div>
  )
}
