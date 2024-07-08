import { Routes, Route } from 'react-router-dom';
import  Layout from './components/Layout';
import TestView from './components/Test/TestView';
import CalculatorView from './components/Calculator/CalculatorView';
import CounterView from './components/Counter/CounterView';
import TaskManager from './components/TaskManager/TaskManagerView';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Layout/>}>
          <Route path="test" element= {<TestView/>} />
          <Route path="/" element= {<TestView/>} />
          <Route path="counter" element= {<CounterView/>} />
          <Route path="calculator" element= {<CalculatorView/>} />
          <Route path="taskManager" element= {<TaskManager/>} />
          <Route path="*" element= {<TestView/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
