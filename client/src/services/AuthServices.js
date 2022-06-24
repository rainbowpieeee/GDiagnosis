import AxiosServices from './AxiosServices'
import Configurations from '../configurations/Configurations'

const axiosServices = new AxiosServices()

export default class AuthServices {
  SignUp(data) {
    return axiosServices.post(Configurations.SignUp, data, false)
  }

  SignIn(data) {
    return axiosServices.post(Configurations.SignIn, data, false)
  }
  GetClients(data) {
    return axiosServices.post(Configurations.GetClients,data,false)
  }
  GetTests(data) {
    return axiosServices.post(Configurations.GetTests,data,false)
  }
  AddQuestion(data) {
    return axiosServices.post(Configurations.AddQuestion,data,false)
  }
  GetQuestions(data) {
    return axiosServices.post(Configurations.GetQuestions,data,false)
  }
  AddTest(data) {
    return axiosServices.post(Configurations.AddTest,data,false)
  }
  GetQuestionsForTest(data) {
    return axiosServices.post(Configurations.GetQuestionsForTest,data,false)
  }
  GetDiagnos(data) {
    return axiosServices.post(Configurations.GetDiagnos,data,false)
  }
  GetTestsDone(data) {
    return axiosServices.post(Configurations.GetTestsDone,data,false)
  }
}