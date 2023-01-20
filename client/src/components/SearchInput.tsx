import Input from '@components/Input';
import { ReactElement } from 'react';
import Search from '@images/search.svg';
import { StyledProps } from '@type/props';

function SearchInput({ className }: StyledProps<{}>): ReactElement {
  return (
    <Input placeholder="Search..." size={20} className={className}>
      <img src={Search} width={24} />
    </Input>
  );
}

export default SearchInput;
