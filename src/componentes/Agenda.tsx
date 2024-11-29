
type AgendaProps={

    content:string;
}

function Agenda({content}:AgendaProps){

    return <td>{content}</td>;
}

export default Agenda;
