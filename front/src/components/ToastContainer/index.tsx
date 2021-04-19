import React from 'react';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

// eslint-disable-next-line no-empty-pattern
const ToastContainer: React.FC<ToastContainerProps> = ({ }: ToastContainerProps) => {

  return (
    <Container>

    </Container>
  );
};

export default ToastContainer;
