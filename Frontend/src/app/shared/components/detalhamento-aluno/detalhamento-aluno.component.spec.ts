import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoAlunoComponent } from './detalhamento-aluno.component';

describe('DetalhamentoAlunoComponent', () => {
  let component: DetalhamentoAlunoComponent;
  let fixture: ComponentFixture<DetalhamentoAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhamentoAlunoComponent]
    });
    fixture = TestBed.createComponent(DetalhamentoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
