import { Link } from 'react-router';

type LinkRouterType = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>;

export function LinkRouter({ children, href, ...props }: LinkRouterType) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
