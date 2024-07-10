import { cn } from '@/lib/utils';

const Container = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        'w-full flex flex-col gap-3 bg-white rounded-lg px-5 py-2 shadow-sm my-8',
        props.className
      )}
    />
  );
};

export default Container;
