import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { FrontService } from 'src/app/shared/services/front.service';
import { IEnderecoInput } from '../../interfaces/IEnderecoInput';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {


  submitted = false;
  disBotao = this.frontService.atvBotao;
  registerForm!: FormGroup;
  end!: IEndereco;
  enderecos: Array<IEnderecoInput> = [];
  enderecoInput = '';
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
  }
  cepBool = false;

  BuscaCep() {
    this.frontService.getCep(this.registerForm.get('cep')?.value).subscribe((ceps => {
      // this.enderecos = ceps;
      this.cepBool = true;
    }));
  }

  idEndereco = this.frontService.id_Endereco;
  salvarCep() {
    this.frontService.add(this.registerForm.value, this.enderecos, "CriarEndereco").subscribe(ends => {
      this.enderecos.push(ends);
      this.frontService.id_Endereco = ends.id;
      console.log("Id do endereço: " + this.frontService.id_Endereco)
    });
  }

  OnSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      alert("endereco salvo com sucesso");
      this.salvarCep();

    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [''],
      cep: [''],
      localidade: [''],
      logradouro: [''],
      bairro: [''],
      uf: [''],
      numero: [''],
      complemento: ['']
    })
  }

  get cep() {
    return this.registerForm.get('cep');
  }


}
