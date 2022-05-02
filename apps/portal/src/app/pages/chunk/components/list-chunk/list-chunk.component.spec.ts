import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChunkComponent } from './list-chunk.component';

describe('ListChunkComponent', () => {
  let component: ListChunkComponent;
  let fixture: ComponentFixture<ListChunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListChunkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
