import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';

chai.use(chaiHttp);

describe('Articles Endpoint /articles', () => {

  it('it should get all todos', (done) => {
    chai.request(app)
      .get('/api/todos')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('todos');
        expect(res.body.todos).to.be.an('array');
        done();
      });
  });

  it('it should create a new todo', (done) => {
    const todo = {
      title: 'code with php'
    };
    chai.request(app)
      .post('/api/todos')
      .send(todo)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.eql('Todo created successfully');
        expect(res.body).to.have.property('todo');
        expect(res.body.todo).to.be.an('object');
        done();
      });
  });

  it('it should get a single todo', (done) => {
    chai.request(app)
      .get('/api/todos/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('todo');
        expect(res.body.todo).to.be.an('object');
        done();
      });
  });

  it('it should update a todo item', (done) => {
    const todo = {
      title: 'code with php'
    };
    chai.request(app)
      .put('/api/todos/1')
      .send(todo)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.an('Todo updated successfully');
        done();
      });
  });

  it('it should delete a todo item', (done) => {
    chai.request(app)
      .delete('/api/todos/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.an('Todo deleted successfully');
        done();
      });
  });
});
