import Image, { StaticImageData } from 'next/image';

type ImageProps = {
  className: string;
  src: StaticImageData;
};

export default function ImageWrapper(props: ImageProps) {
  const { className, src } = props;
  return (
    <div className={className}>
      <Image
        alt=''
        src={src}
        width={500}
        height={500}
        className='object-cover w-full h-full'
      />
    </div>
  );
}
