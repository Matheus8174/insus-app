import styled from 'styled-components';

import { Cancel } from '@styled-icons/material-outlined';
import { Trash } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: #172b4d;
  background: #b1b7c3;
  min-width: 300px;
  border-radius: 4px;
  margin: 4px;
  padding: 10px;

  div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    margin-bottom: 25px;
  }

  section {
    color: #FFF;
    font-size: 20px;
    font-weight: 800;

    display: inline;
    margin-left: 50px;
  }

  button {
    font-size: 15px;
    font-weight: 500;

    outline: none;
    display: inline;
    margin-top: 30px;

    cursor: pointer;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;

    color: #FFF;
    background: #0079BF;
    transition: background 0.5s;

    &:hover {
      background: #026aa7
    }
  }
`;

export const CreateForm = styled.form`
  background: #8d8d8a;
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
  color: #b1b7c3;
  float: right;
  cursor: pointer;

  margin: 10px 10px 0 0;
`;

export const TrashIcon = styled(Trash)`
  margin-right: 8px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: red;
  }
`;
