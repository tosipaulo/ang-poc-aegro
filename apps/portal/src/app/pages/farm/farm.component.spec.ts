import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { FarmComponent } from './farm.component';
import { FarmService } from './services/farm.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BannerModule } from '@aegro/ui';

describe('FarmComponent', () => {
  let component: FarmComponent;
  let fixture: ComponentFixture<FarmComponent>;
  let httpSpy: HttpClient;
  let farmService: FarmService;
  let matDialog: MatDialog;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmComponent],
      imports: [
        MatDialogModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        BannerModule
      ],
      providers: [MatDialog]
    }).compileComponents();
  });

  beforeEach(() => {
    httpSpy = TestBed.inject(HttpClient);
    farmService = TestBed.inject(FarmService);
    matDialog = TestBed.inject(MatDialog);

    fixture = TestBed.createComponent(FarmComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
