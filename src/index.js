
import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/state'
import App from './App';
import { rerenderEntireTree } from './render';


rerenderEntireTree(state);


