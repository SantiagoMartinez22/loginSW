import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from './user';

describe('LoginService', () => {
  let loginService: LoginService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    loginService = TestBed.inject(LoginService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should get a user', () => {
    const credentials = {
      email: 'alejo@gamil.com',
      password: '123456'
    };

    loginService.login(credentials).subscribe((users: User) => { 
      expect(users).toBeTruthy();
      expect(users.email).toContain('@');
    });

    const data = testingController.expectOne('././assets/data.json');
    expect(data.request.method).toEqual('GET');
    data.flush({ id: 1, email: 'alejogomezq97@gmail.com' });
  })

  afterEach(() => {
    testingController.verify();
  })
});
