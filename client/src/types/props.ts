import { ReactNode } from 'react';

type ReactProps<T> = T & { children: ReactNode };

export default ReactProps;
