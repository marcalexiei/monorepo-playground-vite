import React from "react";

interface UIBoxProps {
  content: string;
}

export function UIBox(props: UIBoxProps): React.JSX.Element {
  const { content } = props;

  return <>UIBox content: {content}</>;
}
