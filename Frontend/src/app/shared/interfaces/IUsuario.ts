import { IEndereco } from "./IEndereco";

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
  endereco_Id: number;
  codigo_Registro_Professor: number;
  empresa_Id: number;
  Endereco: IEndereco;
  // cep: string;
  // localidade: string;
  // uf: string;
  // logradouro: string;
  // numero: string;
  // complemento: string;
  // bairro: string;
}
