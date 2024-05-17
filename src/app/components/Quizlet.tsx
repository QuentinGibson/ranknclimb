"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FilledContentRelationshipField,
  KeyTextField,
} from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { clsx } from "clsx";
import Link from "next/link";
import { QuestionsDocument } from "../../../prismicio-types";

export default function Quiz({
  title,
  cards,
}: {
  title: KeyTextField;
  cards: FilledContentRelationshipField<
    "questions",
    "en-us",
    Pick<QuestionsDocument["data"], "options" | "question">
  >[];
}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(cards[currentCardIndex]);
  const [currentChoice, setCurrentChoice] = useState<number | undefined>(
    undefined,
  );
  const [showResults, setShowResults] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [userAnswers, setUserAnswers] = useState<
    Record<number, number | undefined>
  >({});
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const radioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeLeft(60);
    if (intervalId.current) clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          if (intervalId.current) clearInterval(intervalId.current);
          if (currentCardIndex === cards.length - 1) setShowResults(true);
          setCurrentCardIndex((prevIndex) => prevIndex + 1);
          return prevTimeLeft;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [currentCard]);

  return (
    <>
      {showResults ? (
        <div className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold md:text-7xl">{title}</h1>
          <div className="flex flex-col gap-4">
            {userAnswers &&
              Object.entries(userAnswers).map(
                ([questionIndex, answerIndex]) => {
                  const currentCard = cards[Number(questionIndex)];
                  if (!currentCard.data) return null;
                  const isCorrect = answerIndex
                    ? currentCard.data.options[answerIndex].iscorrect
                    : false;
                  const correctChoiceIndex = currentCard.data.options.findIndex(
                    (choice) => choice.iscorrect,
                  );
                  return (
                    <div key={questionIndex} className="flex flex-col gap-2">
                      <p>
                        <span>Question {Number(questionIndex) + 1}: </span>
                        <span>
                          <PrismicText field={currentCard.data.question} />
                        </span>
                      </p>
                      <p>
                        <span>Your answer: </span>
                        <span>
                          {currentCard.data.options[Number(answerIndex)]?.label}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p>
                          <span>
                            Correct answer:{" "}
                            {currentCard.data.options[correctChoiceIndex].label}
                          </span>
                        </p>
                      )}
                    </div>
                  );
                },
              )}
          </div>
          <div className="flex gap-4">
            <Link
              className="mt-4 inline-block w-fit min-w-32 rounded bg-gray-100 py-4 text-center text-black hover:bg-gray-300"
              href="/decklist"
            >
              Another Quiz
            </Link>
            <button
              className="mt-4 w-fit min-w-32 rounded bg-gray-100 py-4 text-black hover:bg-gray-300"
              onClick={(event) => {
                event.preventDefault();
                setCurrentCardIndex(0);
                setCurrentCard(cards[0]);
                setCurrentChoice(undefined);
                setShowResults(false);
                setUserAnswers({});
              }}
            >
              Try again
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col gap-2">
          <div id="QuizHeader" className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold md:text-7xl">{title}</h1>
            <span className="font-bold">
              Time Left: {Math.max(0, parseInt(timeLeft.toFixed(0)))} seconds
            </span>
          </div>
          <div
            id="QuizBody"
            className="flex h-1 w-full grow flex-col gap-16 overflow-auto bg-neutral-800 px-4 py-2 md:w-full"
          >
            <h2 className="prose text-xl font-semibold text-slate-200">
              {currentCard.data && (
                <PrismicText field={currentCard.data.question} />
              )}
            </h2>
            <form className="h-full">
              <div className="flex h-full w-full flex-col items-stretch justify-between gap-4">
                {currentCard.data && (
                  <input
                    className="hidden"
                    type="radio"
                    name={currentCard.id}
                    value={
                      currentChoice
                        ? JSON.stringify(
                            currentCard.data.options[currentChoice],
                          )
                        : undefined
                    }
                    ref={radioRef}
                  />
                )}
                <div className="flex flex-col items-center gap-2">
                  {currentCard.data &&
                    currentCard.data.options.map((option, index) => {
                      return (
                        <label key={index} className="w-full">
                          <div>
                            <div className="flex w-full flex-col">
                              <button
                                className={clsx(
                                  "mx-autow-full rounded py-2",
                                  currentChoice === index
                                    ? "bg-blue-400 hover:bg-blue-400"
                                    : "bg-gray-600 hover:bg-gray-500",
                                )}
                                onClick={(event) => {
                                  event.preventDefault();
                                  setCurrentChoice(index);
                                  if (!radioRef.current) return;
                                  radioRef.current.value = index.toString();
                                }}
                              >
                                <span>{option.label}</span>
                              </button>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                </div>

                <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                  <button
                    type="button"
                    className="mt-2 w-fit min-w-32 rounded bg-gray-100 py-1 text-black hover:bg-gray-300"
                    onClick={() => {
                      setUserAnswers((prevAnswers) => ({
                        ...prevAnswers,
                        [currentCardIndex]: currentChoice,
                      }));
                      if (currentCard === cards[cards.length - 1]) {
                        setShowResults(true);
                      } else {
                        setCurrentCardIndex(currentCardIndex + 1);
                        setCurrentCard(cards[currentCardIndex + 1]);
                        setCurrentChoice(undefined);
                      }
                    }}
                  >
                    {currentCardIndex === cards.length - 1 ? "Submit" : "Next"}
                  </button>
                  <span className="font-bold text-slate-400">
                    Question: {currentCardIndex + 1} of {cards.length}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
