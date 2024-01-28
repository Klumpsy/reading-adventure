import MarkWordsQuestionType from "@/components/QuestionType/MarkWordsQuestionType";
import MultipleChoiceQuestionType from "@/components/QuestionType/MultipleChoiceQuestionType";
import OpenAnswerQuestionType from "@/components/QuestionType/OpenQuestionType";

export const renderQuestionContent = (question, text) => {
  switch (question.type) {
    case "multiple_choice":
      return <MultipleChoiceQuestionType options={question.options} />;
    case "open_answer":
      return <OpenAnswerQuestionType />;
    case "mark_question":
      return <MarkWordsQuestionType question={question} text={text} />;
    default:
      return null;
  }
};
