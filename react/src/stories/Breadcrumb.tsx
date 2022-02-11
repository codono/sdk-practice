import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import './breadcrumb.css';

interface BreadcrumbEl {
  title?: string;
  href?: string;
}

interface BreadcrumbProps {
  list?: Array<BreadcrumbEl>;
}

export const Breadcrumb = ({
  list,
  ...props
}: BreadcrumbProps): JSX.Element => {
  return (
    <Breadcrumbs>
      {list?.map((el, idx) => {
        if (list?.length - 1 === idx) {
          return <Typography>{el.title}</Typography>;
        } else {
          return (
            <Link href={el.href} sx={{ color: '#a7a7a7' }}>
              {el.title}
            </Link>
          );
        }
      })}
    </Breadcrumbs>
  );
};
