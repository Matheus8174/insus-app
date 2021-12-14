import { useState, FormEvent } from 'react';
import { Container, PlusIcon, CreateForm, CancelButton } from './styles';

import axios from 'axios';

const AddColumn: React.FC = () => {
  const [display, setDisplay] = useState(false);

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const url = 'http://localhost:3000/api/v1/columns';

    axios({
      url,
      method: 'POST',
      data: { name, priority }
    }).then(() => {
      window.location.reload()
    }).catch((e) => {
      alert('Já existe uma coluna com esse nome e/ou prioridade')
      // window.location.reload()
    })
  }

  return (
    <div style={{ margin: '4px' }}>
      <Container onClick={() => setDisplay(!display)}>
        <PlusIcon size="20px" />
        Adicionar coluna
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
          placeholder="Insira o nome da coluna"
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="number"
          name="priority"
          value={priority}
          placeholder="Insira a prioridade"
          onChange={({ target }) => setPriority(target.value)}
        />

        <input type="submit" value="Adicionar Coluna" />

        <CancelButton onClick={() => setDisplay(false)} size="40px"></CancelButton>
      </CreateForm>
    </div>
  )
}

export default AddColumn;
