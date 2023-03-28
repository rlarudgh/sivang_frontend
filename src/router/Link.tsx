import { LinkProps } from 'react-router-dom';
import { PageListType } from '../constants/path';

interface PropsType extends LinkProps {
  to: PageListType;
}

export const Link = (props: PropsType) => <Link {...props} />;
