import { render, screen, fireEvent } from '@testing-library/react';
import AdicionarPessoas from '../screens/HomeCoordenacao/AdicionarPessoas/AdicionarPessoas';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

function setup() {
  localStorage.clear();
  localStorage.setItem('tipoUsuario', 'coordenacao');
  return render(
    <BrowserRouter>
      <AdicionarPessoas />
    </BrowserRouter>
  );
}

describe('Cadastro de Pessoas', () => {
  beforeEach(() => {
    vi.stubGlobal('alert', vi.fn()); // isso aq garante q o alert está sempre mockado antes
    localStorage.clear();
  });

  it('deve permitir cadastrar com dados válidos', () => {
    setup();

    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: 'João' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'joao@sistemapoliedro.com.br' },
    });

    fireEvent.click(screen.getByRole('button', { name: /adicionar/i }));

    expect(window.alert).toHaveBeenCalledWith('Pessoa cadastrada com sucesso!');

    const pessoas = JSON.parse(localStorage.getItem('pessoas') || '[]');
    expect(pessoas).toHaveLength(1);
    expect(pessoas[0].email).toBe('joao@sistemapoliedro.com.br');
  });
});
