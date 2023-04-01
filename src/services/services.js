import axios from 'axios';

export const getDogs = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/image/random/50');
  } catch (err) {
    console.log(err);
  }
};

//goals
//get all goals 
export const getALLGoals = async () => {
  try {
    return await axios.get('http://localhost:8099/goals/getAll',{
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
    }});
  } catch (err) {
    console.log(err);
  }
};
//get single goal by id
export const getGoalByID = async (goalID) => {
  try {
    return await (await axios.get('http://localhost:8099/goals/get/'+goalID));
  } catch (err) {
    console.log(err);
  }
};
//get goals created by this user
export const getGoalsByAuthor = async (userID) => {
  try {
    return await (await axios.get('http://localhost:8099/goals/getByAuthor/'+userID));
  } catch (err) {
    console.log(err);
  }
};

export const deleteGoal = async (goalID) => {
  try {
    return await (await axios.delete('http://localhost:8099/goals/delete/'+ goalID));
  } catch (err) {
    console.log(err);
  }
};

export const creatGoal = async (newGoal) => {
  try {
    return await (await axios.post('http://localhost:8099/goals/create', newGoal));
  } catch (err) {
    console.log(err);
  }
};

export const updateGoal = async (goalID, newGoal) => {
  try {
    return await axios.put('http://localhost:8099/goals/update'+goalID, newGoal);
  } catch (err) {
    console.log(err);
  }
};

//Todo
//get all TODO in the TODO collection
export const getALLTodos = async () => {
  try {
    return await axios.get('http://localhost:8099/todolist/getAll');
  } catch (err) {
    console.log(err);
  }
};

//get one single TODO by id
export const getTODOByID = async (todoID) => {
  try {
    return await (await axios.get('http://localhost:8099/todolist/get/'+todoID));
  } catch (err) {
    console.log(err);
  }
};

//get a list of todo by goalID
export const getTODOByGoal = async (goalID) => {
  try {
    return await axios.get('http://localhost:8099/todolist/getbygoalid/'+goalID);
  } catch (err) {
    console.log(err);
  }
};


export const deleteTODO = async (todoID) => {
  try {
    return await axios.delete('http://localhost:8099/todolist/delete/'+ todoID);
  } catch (err) {
    console.log(err);
  }
};

//return the created new todo document
export const creatTODO = async (newTodo) => {
  try {
    return await axios.post('http://localhost:8099/todolist/create', newTodo);
  } catch (err) {
    console.log(err);
  }
};

//return the updated new todo document
export const updateTODO = async (todoID, newTODO) => {
  try {
    return await axios.put('http://localhost:8099/todolist/update'+todoID, newTODO);
  } catch (err) {
    console.log(err);
  }
};

//Task
//get all Task in the TODO collection
export const getALLTasks = async () => {
  try {
    return await axios.get('http://localhost:8099/tasks/getAll');
  } catch (err) {
    console.log(err);
  }
};

//get one single TODO by id
export const getTaskByID = async (taskID) => {
  try {
    return await (await axios.get('http://localhost:8099/tasks/get/'+taskID));
  } catch (err) {
    console.log(err);
  }
};

//get a list of todo by goalID
export const getTaskByGoal = async (goalID) => {
  try {
    return await axios.get('http://localhost:8099/tasks/getByGoal/'+goalID);
  } catch (err) {
    console.log(err);
  }
};


export const deleteTask = async (taskID) => {
  try {
    return await axios.delete('http://localhost:8099/tasks/delete/'+ taskID);
  } catch (err) {
    console.log(err);
  }
};

//return the created new todo document
export const creatTask = async (newTask) => {
  try {
    return await axios.post('http://localhost:8099/tasks/create', newTask);
  } catch (err) {
    console.log(err);
  }
};

//return the updated new todo document
export const updateTask = async (taskID, newTask) => {
  try {
    return await axios.put('http://localhost:8099/tasks/update'+taskID, newTask);
  } catch (err) {
    console.log(err);
  }
};


export const getRickAndMortyCharacters = async () => {
  try {
    return await axios.get('https://rickandmortyapi.com/api/character');
  } catch (err) {
    console.log(err);
  }
};



export const getUserDetails = () => {
  return {
    userName: 'SethVilla',
    email: 'sethvilla@gmail.com',
    firstName: 'Seth',
    lastName: 'Villavicencio',
    token: 'token',
  };
};


