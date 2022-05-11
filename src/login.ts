import renderLoginForm from './components/LoginForm'
import './styles.css'

const app = <HTMLDivElement>document.querySelector('#app')
renderLoginForm(app)

const createuserLink = <HTMLAnchorElement>document.createElement('a')
createuserLink.id = 'create-user-link'
createuserLink.innerText = 'Clique aqui para criar uma nova conta'
createuserLink.href = 'createUser.html'
app.insertAdjacentElement('beforeend', createuserLink)