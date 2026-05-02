type FaqItemProps = {
  question: string;
  answer: string;
  className?: string;
  defaultOpen?: boolean;
};

export function FaqItem({
  question,
  answer,
  className = "",
  defaultOpen = false,
}: FaqItemProps) {
  const classes = ["faq-item", className].filter(Boolean).join(" ");

  return (
    <details className={classes} open={defaultOpen}>
      <summary className="faq-item__question">{question}</summary>
      <div className="faq-item__answer-wrap">
        <p className="faq-item__answer">{answer}</p>
      </div>
    </details>
  );
}