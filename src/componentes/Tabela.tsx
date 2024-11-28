

const data = [
  { dia: 'Segunda-feira', hora: '08:00 - 10:00', disciplina: 'Matemática' },
  { dia: 'Segunda-feira', hora: '10:00 - 12:00', disciplina: 'História' },
  { dia: 'Terça-feira', hora: '08:00 - 10:00', disciplina: 'Física' },
  { dia: 'Quarta-feira', hora: '10:00 - 12:00', disciplina: 'Química' },
  { dia: 'Quinta-feira', hora: '08:00 - 10:00', disciplina: 'Geografia' },
  { dia: 'Sexta-feira', hora: '10:00 - 12:00', disciplina: 'Educação Física' },
];

function Tabela()
{
    return (
        <table className="tabela">
          <thead>
            <tr>
              <th>Dia</th>
              <th>Horário</th>
              <th>Disciplina</th>
            </tr>
          </thead>
         
        </table>
      );
    };

export default Tabela;
