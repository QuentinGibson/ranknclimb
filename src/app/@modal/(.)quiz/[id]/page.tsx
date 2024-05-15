import React from "react";
import { Modal } from "./modal";
import { createClient } from "@/prismicio";
import {
  AbilitiesDocument,
  QuestionsDocument,
} from "../../../../../prismicio-types";
import { isFilled } from "@prismicio/client";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const client = createClient();
  const ability = await client.getByID<AbilitiesDocument>(id, {
    fetchLinks: ["questions.question", "questions.options", "questions.uid"],
  });
  console.dir(ability.data.questions, { depth: 5 });
  const questionList = [];
  for (const question of ability.data.questions) {
    if (
      isFilled.contentRelationship<
        "questions",
        Pick<QuestionsDocument["data"], "options" | "question">
      >(question.question)
    ) {
      questionList.push(question.question);
    }
  }

  return (
    <Modal>
      <div className="w-full">
        <div className="zinc-950 flex items-center">{id}</div>
      </div>
    </Modal>
  );
}
