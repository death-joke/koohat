import React from 'react';
import {render, screen, act} from '@testing-library/react';
import App from '../App';

test('Form name', () => {
  
});

// test('Question X', () => {
//     render(<App/>);
//     const questionLabel: HTMLLabelElement = screen.getByText(/Question [1-9]+ :/i);
//     const questionInput: HTMLInputElement = screen.getByLabelText(/Question [1-9]+ :/i);

//     expect(questionLabel).toBeInTheDocument();
//     expect(questionLabel.tagName).toBe('LABEL');

//     // Making sure the text input is in the document and label is linked to it
//     expect(questionInput).toBeInTheDocument();
//     expect(questionInput.tagName).toBe('INPUT');
//     expect(questionInput.getAttribute('type')).toBe('text');
//     expect(questionLabel.htmlFor).toBe(questionInput.id);
// });

// test('Answer X', () => {
//     render(<App/>);
//     const answerLabels: HTMLLabelElement[] = screen.getAllByText(/Réponse [1-4] :/i);
//     const answerInputs: HTMLInputElement[] = screen.getAllByLabelText(/Réponse [1-4] :/i);

//     // Making sure there's only four labels and inputs
//     expect(answerLabels).toHaveLength(4);
//     expect(answerInputs).toHaveLength(4);

//     // For each label, we test if it's in the document, if it's a label.
//     answerLabels.forEach((label: HTMLLabelElement, index: number) => {
//         expect(label).toBeInTheDocument();
//         expect(label.tagName).toBe('LABEL');
//         expect(label.htmlFor).toBe(answerInputs[index].id);
//     });

//     // For each input, we test if it's in the document, if it's an input, if it's a text input and if it's linked to a label.
//     answerInputs.forEach((input: HTMLInputElement, index: number) => {
//         expect(input).toBeInTheDocument();
//         expect(input.tagName).toBe('INPUT');
//         expect(input.getAttribute('type')).toBe('text');
//         expect(input.id).toBe(answerLabels[index].htmlFor);
//     });
// });

// test('Add new question', () => {
//     render(<App/>);
//     const addQuestionButton: HTMLElement = screen.getByText(/Ajouter une question/i);
//     expect(addQuestionButton).toBeInTheDocument();
//     expect(addQuestionButton.tagName).toBe('BUTTON');

//     const firstQuestionLabel: HTMLLabelElement = screen.getByText(/Question [1-9]+ :/i);
//     const firstQuestionNumber: number = parseInt(firstQuestionLabel.textContent!.split(' ')[1]);

//     // Should be 1 as there's only one question
//     expect(firstQuestionLabel).toBeInTheDocument();
//     expect(firstQuestionNumber).toBe(1);
//     expect(firstQuestionLabel.tagName).toBe('LABEL');

//     // eslint-disable-next-line testing-library/no-unnecessary-act
//     act(() => {
//         // Now clicking on the button to add a new question
//         addQuestionButton.click();

//         // Get the new question label and input after firstQuestionLabel (second)
//         const afterClickQuestionLabels: HTMLLabelElement[] = screen.getAllByText(/Question [1-9]+ :/i);

//         afterClickQuestionLabels.forEach((label: HTMLLabelElement, index: number) => {
//             expect(label).toBeInTheDocument();
//             expect(label.tagName).toBe('LABEL');
//             expect(label.textContent).toBe(`Question ${index + 1} : `);
//         });
//     });
// });

// test('Create form button', () => {
//     render(<App/>);
//     const createFormButton: HTMLElement = screen.getByText(/Créer le formulaire/i);
//     expect(createFormButton).toBeInTheDocument();
//     expect(createFormButton.tagName).toBe('BUTTON');
// });