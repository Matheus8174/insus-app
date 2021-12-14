import { useEffect, useState } from 'react';
import axios from 'axios';

import Column from '../../components/Column';
import AddColumn from '../../components/AddColumn';
import Task from '../../components/Task';
import { Container } from './styles';

type ColumnsResponse = [
  {
    id: string
    name: string
    priority: number
    created_at: string
    updated_at: string
  }
]

type TasksResponse = [
  {
    id: string,
    name: string,
    description: string,
    done: boolean,
    columns_id: string,
    created_at: string,
    updated_at: string
  }
]

const Home: React.FC = () => {
  const [columns, setColumns] = useState<ColumnsResponse>()
  const [tasks, setTasks] = useState<TasksResponse>()

  useEffect(getColumns, [])
  useEffect(getTasks, [])

  function getTasks() {
    const url = 'http://localhost:3000/api/v1/tasks';

    axios({
      url,
      method: 'GET',
    }).then((e) => {
      setTasks(e.data);
    })
  }

  function getColumns() {
    const url = 'http://localhost:3000/api/v1/columns';

    axios({
      url,
      method: 'GET',
    }).then((e) => {
      setColumns(e.data);
    })
  }

  function renderTasks (columnId: string) {
    const allTasks = tasks?.filter(({ columns_id }) => columns_id === columnId);

    return allTasks
  }

  return (
    <Container>
      { (tasks && columns)?
        columns.map (
          ({ name, priority, id }) => {

          return (
            <Column column={{ name, priority, id }} key={id}>
              { renderTasks(id)?.map(({ name, id }) => <Task id={id} key={id}>{ name }</Task>)}
            </Column>
          )
        }) : ' loading...'}

      <AddColumn />
    </Container>
  );
}

export default Home;
