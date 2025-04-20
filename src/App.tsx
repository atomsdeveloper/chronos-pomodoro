import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import { MessageContainer } from './components/MessageContainer';

import { MainRouter } from './routers/MainRouter';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}
