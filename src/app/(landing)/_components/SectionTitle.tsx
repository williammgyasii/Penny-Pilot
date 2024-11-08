import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="space-y-3">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
