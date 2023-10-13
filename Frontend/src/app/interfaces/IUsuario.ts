export interface IUsuario {
  id: number;
  nome: string;
  cpf: string;
  tipo: string;
  email: string;
  telefone: string;
  genero: string;
  senha: string;
  status_sistema: boolean;
  matricula_Aluno: string;
  codigo_Registro_Professor: number;
  empresa_Id: number;
  endereco_Id: number;
}
