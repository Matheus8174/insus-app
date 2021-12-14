import axios from 'axios';
import { Container, TrashIcon } from './styles';

const Task: React.FC<{ id: string }> = ({ children, id }) => {

  function handleCLick() {
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/api/v1/tasks/${id}`
    }).then((e) => {
      if(e.status >= 200 || e.status < 300) {
        window.location.reload()
      }
    })
  }

  return (
    <Container>
      <p>{children}</p>
      <TrashIcon size={20} onClick={handleCLick}/>
    </Container>
  );
}

export default Task;
