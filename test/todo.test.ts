import * as chai from 'chai'
import * as sinon from 'sinon'
import Todo from '../src/todo'

// describe('./src/todo.ts', () => {
//   it('spy print', () => {
//     let store = {
//       save() {}
//     }
//     let t = new Todo(store)
//     sinon.spy(console, 'log')
//     t.add('React')
//     t.add('Node')
//     t.add('Vue')
//     t.add('TypeScript')
//     t.add('flutter')
//     t.add('Java')
//     t.add('K8s')
//     t.print()
//     //@ts-ignore
//     chai.expect(console.log.calledOnce).to.be.true
//   })
// })