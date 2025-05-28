import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../screens/Login/Login';
import { vi, describe, it, beforeEach, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

function setupLogin() {
  return render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}

describe('Login', () => {
  beforeEach(() => {
    vi.stubGlobal('alert', vi.fn());
    localStorage.clear();
  });

  it('deve permitir login com credenciais válidas', () => {
    setupLogin();

    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: 'coordenacao@seudominio.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: '123' },
    });

    fireEvent.click(screen.getByText(/login/i));

    expect(localStorage.getItem('tipoUsuario')).toBe('coordenacao');
  });

  it('deve falhar login com senha inválida', () => {
    setupLogin();

    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: 'coordenacao@seudominio.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: 'errada' },
    });

    fireEvent.click(screen.getByText(/login/i));

    expect(window.alert).toHaveBeenCalledWith('E-mail ou senha inválidos');
    expect(localStorage.getItem('tipoUsuario')).toBeNull();
  });
});
