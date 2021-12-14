import styled from 'styled-components';
import { Trash } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  background: #FFF;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;

  p {
    font-weight: 500;
    color: #172b4d;
  }
`;

export const TrashIcon = styled(Trash)`
  margin-right: 8px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: red;
  }
`;
