import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  className?: string;
}
const PageTitle = ({ title, className }: PageTitleProps) => {
  return <h1 className={cn('text-3xl font-semibold', className)}>{title}</h1>;
};

export default PageTitle;
