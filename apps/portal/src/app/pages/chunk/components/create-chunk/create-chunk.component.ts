import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChunkService } from '../../services/chunk.service';

@Component({
  selector: 'aegro-create-chunk',
  templateUrl: './create-chunk.component.html',
  styleUrls: ['./create-chunk.component.scss'],
})
export class CreateChunkComponent implements OnInit {

  formChunk!: FormGroup;
  @Input() farmId!: string;
  @Output() createSuccess = new EventEmitter;
  
  constructor(
    private fb: FormBuilder,
    private chunkService: ChunkService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.formChunk = this.fb.group({
      name: [''],
      size: ['']
    })
  }

  onSubmit() {
    const {name, size} = this.formChunk.value
    const payloadChunk = {
      farmId: this.farmId,
      name,
      size
    }


    this.chunkService.createChunk(payloadChunk)
      .subscribe(responseChunk => {
        this.formChunk.reset();
        this.snackBar.open(responseChunk?.message, 'fechar');
        this.createSuccess.emit(payloadChunk);
      });
  }
}
