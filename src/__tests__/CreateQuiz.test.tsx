import React from 'react';
import {render, screen, act} from '@testing-library/react';
import App from '../App';
import CreateQuizz from "../composant/CreateQuizz";

test('Form name', () => {
    render(<CreateQuizz />);
    const formName = screen.getByTestId("nameform")
    expect(formName).toBeInTheDocument();
    expect(formName.tagName).toBe('INPUT');
    expect(formName.getAttribute('type')).toBe('email');
});