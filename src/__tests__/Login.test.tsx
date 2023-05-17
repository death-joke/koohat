import React from 'react';
import {render, screen, act} from '@testing-library/react';
import App from '../App';
import AuthPage from "../view/authPage";
import Login from "../composant/login";
import LoginPage from "../view/loginPage";

test('HTML elements', () => {
    render(<LoginPage />)
    const username : HTMLInputElement = screen.getByPlaceholderText(/Username/i);
    const password : HTMLInputElement = screen.getByPlaceholderText("********");

    expect(username).toBeInTheDocument();
    expect(username.tagName).toBe("INPUT");
    expect(username.type).toBe("text");

    expect(password).toBeInTheDocument();
    expect(password.tagName).toBe("INPUT");
    expect(password.type).toBe("password");

    const button : HTMLButtonElement = screen.getByRole("button", {name: /Se connecter/i});
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
});

test('Not existing user', () => {
    render(<LoginPage />)
    const username : HTMLInputElement = screen.getByPlaceholderText(/Username/i);
    const password : HTMLInputElement = screen.getByPlaceholderText("********");
    const button : HTMLButtonElement = screen.getByRole("button", {name: /Se connecter/i});

    act(() => {
        username.value = "test";
        password.value = "test";
        button.click();
    });

    expect(username.value).toBe("test");
    expect(password.value).toBe("test");
});