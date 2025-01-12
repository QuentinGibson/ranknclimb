"use client";
import React, { useRef, useState } from "react";
import {
  FilledContentRelationshipField,
  KeyTextField,
} from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { clsx } from "clsx";
import Link from "next/link";
import { QuestionsDocument } from "../../../prismicio-types";
import { useQuizStore } from "../../lib/quizStore";
import { createUserCardActivity } from "@/lib/queries/activities";

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
  const { currentQuestionIndex, setCurrentQuestionIndex, userAnswers, setUserAnswers, startQuiz, setQuizState, quizState } = useQuizStore();
  const currentCard = cards[currentQuestionIndex];
  const [currentChoice, setCurrentChoice] = useState<number | undefined>(undefined);
  const radioRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {quizState === "result" ? (
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
                          {correctChoiceIndex !== -1 ? (
                            <span>
                              Correct answer:{" "}
                              {
                                currentCard.data.options[correctChoiceIndex]
                                  .label
                              }
                            </span>
                          ) : (
                            <span>
                              Correct Answer is bugged! This has been
                              automatically reported!
                            </span>
                          )}
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
                setCurrentQuestionIndex(0);
                setCurrentChoice(undefined);
                setQuizState("inProgress");
                startQuiz();
              }}
            >
              Try again
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex h-full w-full max-w-md flex-col gap-2 px-4">
          <div id="QuizHeader" className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold md:text-5xl">{title}</h1>
          </div>
          <div
            id="QuizBody"
            className="flex h-fit w-full grow flex-col gap-16 overflow-auto py-2 md:w-full"
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
                                  "mx-auto w-full rounded py-2",
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
                    className="mt-2 w-16 min-w-32 rounded bg-gray-100 py-1 text-black hover:bg-gray-300"
                    onClick={async () => {
                      const isCorrect = currentCard.data?.options[currentChoice!].iscorrect;
                      createUserCardActivity(currentCard.id, currentChoice!, isCorrect || false)
                      setUserAnswers(currentCard.id, currentQuestionIndex, currentChoice, isCorrect || false)
                      if (currentCard === cards[cards.length - 1]) {
                        setQuizState("result");
                      } else {
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                        setCurrentChoice(undefined);
                      }
                    }}
                  >
                    {currentQuestionIndex === cards.length - 1
                      ? "Submit"
                      : "Next"}
                  </button>
                  <span className="font-bold text-slate-400">
                    Question: {currentQuestionIndex + 1} of {cards.length}
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
