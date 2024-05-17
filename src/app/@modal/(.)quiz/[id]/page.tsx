import React from "react";
import { Modal } from "./modal";
import { createClient } from "@/prismicio";
import {
  AbilitiesDocument,
  QuestionsDocument,
} from "../../../../../prismicio-types";
import { FilledContentRelationshipField, isFilled } from "@prismicio/client";
import Quizlet from "@/app/components/Quizlet";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
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
    <Modal>
      <div className="h-full w-full">
        <div className="zinc-950 flex h-full items-center px-4 py-8">
          <Quizlet cards={questionList} title={ability.data.name} />
        </div>
      </div>
    </Modal>
  );
}
