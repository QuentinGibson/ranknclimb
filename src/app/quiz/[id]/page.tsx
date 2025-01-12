import Quizlet from "@/app/components/Quizlet";
import { createClient } from "@/prismicio";
import React from "react";
import {
  AbilitiesDocument,
  QuestionsDocument,
} from "../../../../prismicio-types";
import { FilledContentRelationshipField, isFilled } from "@prismicio/client";

type QuizPageParams = Promise<{ id: string }>;


export default async function QuizPage({ params }: { params: QuizPageParams }) {
  const { id } = await params;
  const client = createClient();
  const ability = await client.getByID<AbilitiesDocument>(id, {
    fetchLinks: ["questions.question", "questions.options", "questions.uid"],
  });
  const questionList: FilledContentRelationshipField<
    "questions",
    "en-us",
    Pick<QuestionsDocument["data"], "options" | "question">
  >[] = [];
  for (const question of ability.data.questions) {
    if (
      isFilled.contentRelationship<
        "questions",
        "en-us",
        Pick<QuestionsDocument["data"], "options" | "question">
      >(question.question)
    ) {
      questionList.push(question.question);
    }
  }
  return (
    <div className="flex items-center justify-center py-16">
      <Quizlet title={ability.data.name} cards={questionList} />
    </div>
  );
}
