import React from 'react';
import {render, screen, act} from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
   
});

test('Create form button', () => {
    render(<App/>);
    const createFormButton: HTMLElement = screen.getByText(/Créer le formulaire/i);
    expect(createFormButton).toBeInTheDocument();
    expect(createFormButton.tagName).toBe('BUTTON');
});