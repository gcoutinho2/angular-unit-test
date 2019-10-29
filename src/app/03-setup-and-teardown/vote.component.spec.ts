import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // ARRANGE
  let component: VoteComponent;

  // método chama antes de iniciar o teste
  beforeEach(() => {
    component = new VoteComponent();
  });

  afterEach(() => {} ); // método é chamado após execução do teste
  beforeAll(() => {} ); // método é chamado antes de todos os testes
  afterAll(() => {} ); // método é chamado depois de todos os testes

  it('should increment totalVotes when upvoted', () => {
    // ACT
    component.upVote();

    // ASSERT
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', () => {
    // ACT
    component.downVote();

    // ASSERT
    expect(component.totalVotes).toBe(-1);
  });

});
