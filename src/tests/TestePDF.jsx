import jsPDF from 'jspdf';


function TestePDF() {
  const emitirRelatorio = () => {
    console.log('Botão clicado');

    const doc = new jsPDF();
    doc.text('Teste PDF simples', 10, 10);
    doc.save('teste.pdf');
  };

  return (
    <div style={{ padding: '40px' }}>
      <button onClick={emitirRelatorio}>Emitir PDF</button>
    </div>
  );
}

export default TestePDF;
