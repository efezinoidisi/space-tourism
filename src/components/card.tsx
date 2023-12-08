type CardProps = {
  subheading: string;
  heading: string;
  paragraph: string;
  subheadingStyles: string;
  headingStyles: string;
  paragraphStyles: string;
  wrapperStyles: string;
};

export default function TextCard(props: CardProps) {
  const {
    subheading,
    heading,
    paragraph,
    subheadingStyles,
    headingStyles,
    paragraphStyles,
    wrapperStyles,
  } = props;
  return (
    <div className={wrapperStyles}>
      <h3 className={headingStyles}>{heading}</h3>
      <h4 className={subheadingStyles}>{subheading}</h4>
      <p className={paragraphStyles}>{paragraph}</p>
    </div>
  );
}
