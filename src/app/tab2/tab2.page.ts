import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabitoService } from '../services/habito.service';
import { Habito } from '../models/habito.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  habitoForm: FormGroup;

  constructor(private fb: FormBuilder, private habitoService: HabitoService) {
    this.habitoForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  agregarHabito() {
    if (this.habitoForm.valid) {
      const nuevoHabito: Habito = new Habito(
        Date.now().toString(), // ID único
        this.habitoForm.value.titulo,
        this.habitoForm.value.descripcion,
        false // No completado por defecto
      );

      this.habitoService.agregarHabitos(nuevoHabito);
      console.log('Hábito agregado:', nuevoHabito);
      
      // Reiniciar formulario
      this.habitoForm.reset();
    }
  }
}
