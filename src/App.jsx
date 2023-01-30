import './App.css'
// icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
// components
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'
// hooks
import { useForm } from './hooks/useForm'
import { useState } from "react"

/* 01 - persistindo os dados do input: 
criando um objeto com dados que iniciam string vazia*/
const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {

  /* 02 - persistindo os dados do input:
  esse objeto vai ser o estado inicial do useState*/
  const [data, setData] = useState(formTemplate)

  //função que vai fazer os dados persistirem
  const updateFieldHandler = (key, value) => { // key eh para saber a chave do objeto que estamos trabalhando e o value o valor dele
    setData((prev) => {  // prev eh o previous state, o estado anterior
      return { ...prev, [key]: value} // retorna todos os dados do estado anterior mais a chave do objeto atual com o seu valor novo
    })
  }

  /* 03 - persistindo os dados do input:
  agora, o nosso data do state sera passado como props aos components e a função*/
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />, 
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, 
    <Thanks data={data} />
  ]

  const { currentStep, 
          currentComponent, 
          changeStep, 
          isLastStep,
          isFirstStep } = useForm(formComponents)

  return (
    <div className="App">
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com a sua compra, por favor, avalie o produto!</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && 
                <button type='button' onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious />
                <span>Voltar</span>
                </button>
              }
              {!isLastStep ? (
                <button type='submit'>Avançar <GrFormNext /></button>
              ) : (
                <button type='button'>Enviar <FiSend /></button>
              )}
            </div>
          </form>
      </div>
    </div>
  )
}

export default App
