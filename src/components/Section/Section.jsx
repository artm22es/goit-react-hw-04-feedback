import { SectionThumb } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionThumb>
      <h1>{title}</h1>
      {children}
    </SectionThumb>
  );
};
