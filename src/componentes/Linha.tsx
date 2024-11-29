import Agenda from './Agenda';

type LinhaProps ={
  dia: string;
  hora: string;
  disciplina: string;
}

function Linha({dia,hora,disciplina}:LinhaProps)
{
  return (
    <tr>
      <Agenda content={dia} />
      <Agenda content={hora} />
      <Agenda content={disciplina} />
    </tr>
  );
}

export default Linha;
