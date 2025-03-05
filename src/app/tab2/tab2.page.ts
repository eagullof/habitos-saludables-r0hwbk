import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabitoService } from '../services/habito.service';
import { Habito } from '../models/habito.model';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  habitoForm: FormGroup;
  imagen: string | null = null; // Para almacenar la imagen seleccionada

  constructor(private fb: FormBuilder, private habitoService: HabitoService) {
    this.habitoForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  async seleccionarImagen() {
    try {
      let image: any;
  
      if (Capacitor.getPlatform() === 'web') {
        // En web, usar input file en lugar de Camera API
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.click();
  
        input.onchange = () => {
          const file = input.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              this.imagen = reader.result as string; // Guardamos la imagen en base64
              console.log('📸 Imagen seleccionada desde la galería en web:', this.imagen);
            };
            reader.readAsDataURL(file);
          }
        };
      } else {
        // En dispositivos móviles, ofrecer opciones de Cámara o Galería
        image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt // Permite elegir entre cámara y galería en móviles
        });
  
        this.imagen = image.dataUrl || null; // Almacena la imagen en base64
        console.log('📸 Imagen seleccionada en móvil:', this.imagen);
      }
    } catch (error) {
      console.error('❌ Error al seleccionar imagen:', error);
    }
  }

  agregarHabito() {
    if (this.habitoForm.valid) {
      const nuevoHabito: Habito = new Habito(
        Date.now().toString(), // ID único
        this.habitoForm.value.titulo,
        this.habitoForm.value.descripcion,
        false, // No completado por defecto
        this.imagen ?? undefined
      );

      this.habitoService.agregarHabito(nuevoHabito);
      console.log('Hábito agregado:', nuevoHabito);
      
      // Reiniciar formulario
      this.habitoForm.reset();
      this.imagen = null;
    }
  }
}
