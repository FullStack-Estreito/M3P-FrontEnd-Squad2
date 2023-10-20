import { FrontService } from '../../services/front.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  usuarios: Array<IUsuario> = [];
  usuario!: IUsuario;
  constructor(private router: ActivatedRoute, private route: Router, private frontService: FrontService) {
  }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get("id"))
    this.frontService.getId(id).subscribe((item) => {
      this.usuario = item;
    });
  }
}
