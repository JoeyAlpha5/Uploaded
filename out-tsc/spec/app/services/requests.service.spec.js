import { TestBed } from '@angular/core/testing';
import { RequestsService } from './requests.service';
describe('RequestsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(RequestsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=requests.service.spec.js.map