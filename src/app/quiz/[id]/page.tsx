import React from "react";

interface Params {
  id: string;
}

export default function QuizPage({ params }: { params: Params }) {
  const { id } = params;
  return <div>{id}</div>;
}
