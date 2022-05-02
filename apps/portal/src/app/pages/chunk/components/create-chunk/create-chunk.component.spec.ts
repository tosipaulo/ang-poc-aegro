import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChunkComponent } from './create-chunk.component';

describe('CreateChunkComponent', () => {
  let component: CreateChunkComponent;
  let fixture: ComponentFixture<CreateChunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateChunkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
