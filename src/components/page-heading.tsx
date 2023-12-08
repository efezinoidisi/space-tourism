export default function PageHeading({
  text,
  num,
}: {
  text: string;
  num: number;
}) {
  return (
    <h2 className='uppercase text-foreground font-barlow-condensed text-center text-base tracking-[0.16875rem] md:text-left py-3 md:text-xl md:tracking-[0.21094rem] lg:text-[1.75rem] lg:tracking-[0.29531rem]'>
      <span className='text-primary opacity-40'>{`0${num}`}</span> {text}
    </h2>
  );
}
