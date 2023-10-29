import { Component } from '@angular/core';
import { EmpresaService } from '../../services/Empresa.Service';
import { IWhiteLabel } from '../../interfaces/IWhiteLabel';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {
  empresas: FormGroup;
  urlImagem: string = '';
  arquivoSelecionado: File | null = null;
  id = 1 //O id inicializado com o admin
  empresa: Array<IWhiteLabel> | null = null;
  empresaDados: Array<IWhiteLabel> = [];

  constructor(private frontService: EmpresaService){
    this.buscarInfo()
    this.empresas = new FormGroup({
      'nomeEmpresa': new FormControl('', Validators.required),
      'cores': new FormControl('', Validators.required),
      'logo': new FormControl('', Validators.required),
    })
    
    
  }
  
  buscarInfo(){
    return this.frontService.get().subscribe((response) => {
      this.empresa = response
      this.empresaDados = this.empresa
      this.empresas.get('nomeEmpresa')?.setValue(this.empresaDados[this.id - 1].nomeEmpresa)
      this.empresas.get('cores')?.setValue(this.empresaDados[this.id - 1].palheta_Cores)
      this.empresas.get('logo')?.setValue(this.empresaDados[this.id - 1].imagem_Logotipo)
    })
    
  }

  ArquivoSelecionado(event: any) {
    const arquivo = event.target.files[0];
    if (arquivo) {
      this.arquivoSelecionado = arquivo;

      const leitor = new FileReader();
      leitor.readAsDataURL(arquivo);
      leitor.onload = (e) => {
        this.urlImagem = e.target?.result as string;
      };
    }
  }

AttEmpresa(){
    const empresaAtt = {
      nomeEmpresa: this.empresas.get('nomeEmpresa')?.value,
      palheta_Cores: this.empresas.get('cores')?.value,
      imagem_Logotipo: this.empresas.get('logo')?.value,
    }
      this.frontService.atualizar(empresaAtt, this.id).subscribe((response) => {
        console.log(response)
      })
    
  }
}
