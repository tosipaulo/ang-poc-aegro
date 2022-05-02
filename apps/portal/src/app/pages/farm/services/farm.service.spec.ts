import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FarmService } from './farm.service';

describe('FarmService', () => {
  let farmService: FarmService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FarmService]
    });
    
    farmService = TestBed.inject(FarmService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(farmService).toBeTruthy();
  });

  it('should to test getFarms', () => {
    const fakeBody = [
      {
        name: 'Fazendo do Tosi'
      }
    ]

    farmService.getFarms().subscribe((res) => {
      expect(res).toEqual(fakeBody);
    })

    const request = httpMock.expectOne( req => {
      return req.method === 'GET'
    })

    request.flush(fakeBody)
  });

  it('should to test createFarm', () => {
    const fakeBody = {
      message: 'deu boa'
    }

    farmService.createFarm('Fazenda').subscribe((res) => {
      expect(res).toEqual(fakeBody);
    })

    const request = httpMock.expectOne( req => {
      return req.method === 'POST'
    })

    request.flush(fakeBody)
  });
});
