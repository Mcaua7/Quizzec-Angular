import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatQuizPageComponent } from './creat-quiz-page.component';

describe('CreatQuizPageComponent', () => {
  let component: CreatQuizPageComponent;
  let fixture: ComponentFixture<CreatQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatQuizPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
