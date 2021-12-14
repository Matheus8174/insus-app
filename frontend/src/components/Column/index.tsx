import { Plus } from '@styled-icons/boxicons-regular';
import { useState, FormEvent } from 'react';
import axios from 'axios';

import { Container, TrashIcon, CreateForm, CancelButton } from './styles';

type task = [{
  id: string,
  name: string,
  description: string,
  done: string,
  columns_id: string,
  created_at: string,
  updated_at: string
}]

type Props = {
  column: {
    id: string
    name: string
    priority: number
  }
}

const Column: React.FC<Props> = ({ column, children }) => {

  const [display, setDisplay] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleCLick() {
    console.log(column.id)

    function checkColumnHaveTasks() {
      axios({
        method: 'GET',
        url: `http://localhost:3000/api/v1/tasks`
      }).then((e) => {
        console.log(e.data)
        const haveTasks = (e.data as task).filter((e) => e.columns_id === column.id);

        if (haveTasks.length > 0) {
          const value = window.prompt(`
            Essa coluna já tem tarefas. Ao deletar ela você perderá todas as tarefas associadas.
            digite o nome da coluna ${column.name} para deleta-la`)?.valueOf()

          if(value === column.name) {
            axios({
              method: 'DELETE',
              url: `http://localhost:3000/api/v1/columns/${column.id}`
            }).then((e) => {
              window.location.reload()
            }).catch((e) => {
              window.alert(e.data)
            })
          }
        } else {
          axios({
            method: 'DELETE',
            url: `http://localhost:3000/api/v1/columns/${column.id}`
          }).then((e) => {
            window.location.reload()
          }).catch((e) => {
            window.alert(e.data)
          })
        }
      })
    }

    checkColumnHaveTasks()
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const url = 'http://localhost:3000/api/v1/tasks';

    axios({
      url,
      method: 'POST',
      data: { name, description }
    }).then(() => {
      window.location.reload()
    }).catch((e) => {
      alert(e)
      window.location.reload()
    })
  }

  return (
    <div>
      <Container>
        <div>
          <h2>{column.name}</h2>
          <TrashIcon size={20} onClick={handleCLick}/>
        </div>
        { children }

        <div>
        <button onClick={() => setDisplay(!display)}>
          <Plus size={20} /> Adicionar uma tarefa
        </button>

        <section>
          { column.priority }
        </section>
      </div>
      </Container>
        <CreateForm
          method="POST"
          style={{ display: (display)? 'block' : 'none' }}
          onSubmit={handleSubmit}
        >
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Insira o nome da tarefa"
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Insira uma descrição"
          onChange={({ target }) => setDescription(target.value)}
        />

        <input type="submit" value="Adicionar tarefa" />

        <CancelButton onClick={() => setDisplay(false)} size="40px"></CancelButton>
      </CreateForm>
    </div>
  );
}

export default Column;
