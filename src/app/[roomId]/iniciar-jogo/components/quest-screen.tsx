"use client";

import { useState } from "react";

export function QuestScreen() {
    const [question, setQuestion] = useState("Qual é a capital da França?");
    const [options, setOptions] = useState(["Paris", "Roma", "Londres", "Berlim"]);
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);

    function handleAnswer(option: string) {
        if (option === "Paris") {
            setPlayer1Score(player1Score + 1); // Exemplo: aumenta a pontuação do Jogador 1
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-between border-2 border-gray-300 rounded-lg p-4">
            {/* Questão e Respostas */}
            <div className="w-full flex flex-col items-center mb-6 border-2 border-gray-400 rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{question}</h1>
                <div className="space-y-2">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleAnswer(option)}
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {/* Jogadores e Pontuações */}
            <div className="w-full flex justify-between border-t-2 border-gray-300 pt-4">
                <div className="flex flex-col items-start border-2 border-gray-400 rounded-lg p-4 w-1/3">
                    <h2 className="text-lg font-bold">Jogador 1</h2>
                    <p>Pontuação: {player1Score}</p>
                </div>
                <div className="flex flex-col items-end border-2 border-gray-400 rounded-lg p-4 w-1/3">
                    <h2 className="text-lg font-bold">Jogador 2</h2>
                    <p>Pontuação: {player2Score}</p>
                </div>
            </div>
        </div>
    );
}
