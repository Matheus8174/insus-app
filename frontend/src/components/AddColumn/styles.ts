import { Plus } from '@styled-icons/boxicons-regular';
import { Cancel } from '@styled-icons/material-outlined';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  width: 300px;

  background: #8d8d8a;
  color: #172b4d;
  transition: background 0.5s;

  &:hover {
    background: #83817f;
  }
`;

export const PlusIcon = styled(Plus)`
  padding: 0;
  margin-right: 20px;
`;

export const CreateForm = styled.form`
  background: #b1b7c3;
  margin: 10px 0;
  padding: 10px 0px 10px 10px;
  border-radius: 4px;
  width: 300px;

  input[type="text"] {
    margin-bottom: 10px;
  }

  input {
    outline: none;
    display: block;
  }

  input[type="submit"] {
    margin-top: 10px;
    display: inline;

    cursor: pointer;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;

    color: #FFF;
    font-weight: 400;
    font-size: 20px;
    background: #0079BF;
    transition: background 0.5s;

    &:hover {
      background: #026aa7
    }
  }

  input[type="text"]::placeholder {
    font-size: 15px;
  }
`;

export const CancelButton = styled(Cancel)`
  color: #83817f;
  float: right;
  cursor: pointer;

  margin: 10px 10px 0 0;
`;
