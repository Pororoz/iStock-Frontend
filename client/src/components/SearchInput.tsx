import { ReactElement } from 'react';
import Input from '@components/Input';
import { StyledProps } from '@type/props';
import Search from '@images/search.svg';

function SearchInput({ className }: StyledProps<{}>): ReactElement {
  return (
    <Input placeholder="Search..." size={20} className={className}>
      <img src={Search} width={24} />
    </Input>
  );
}

export default SearchInput;
