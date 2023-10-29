export interface IAtendimento {
  id: number,
  data: string,
  descricao: string,
  aluno_id: number,
  pedagogo_id: number,
  professor_nome: { nome: string }
}
