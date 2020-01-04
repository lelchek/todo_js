import './styles.css';
import tasks from './components/tasks.js';
import themes from './components/themes.js';

const refs = {
  listGroup: document.querySelector('.list-group'),
  form: document.forms['addTask'],
  inputTitle: document.forms['addTask'].elements['title'],
  inputBody: document.forms['addTask'].elements['body'],
  selectTheme: document.querySelector('#themeSelect'),
};

let lastSelectedTheme = localStorage.getItem('theme') || 'default';
refs.selectTheme.value = lastSelectedTheme;

const createAllListItem = tasks => {
  let listItemString = '';
  const listItem = tasks.forEach(task => {
    listItemString += createItem(task);
  });
  return listItemString;
};

const createItem = ({ _id, title, body }) => {
  return `<li class="list-group-item d-flex align-items-center flex-wrap mt-2" data-key=${_id}><span>${title}</span><button class="btn btn-danger ml-auto delete-btn">Delete</button><p class="mt-2 w-100">${body}</p></li>`;
};

const onFormSubmit = e => {
  e.preventDefault();
  const titleValue = refs.inputTitle.value;
  const bodyValue = refs.inputBody.value;
  //   console.log(titleValue, bodyValue);
  if (!titleValue || !bodyValue) {
    alert('Заполните, пожалуйста, форму');
    return;
  }
  const newTask = createNewTask(titleValue, bodyValue);
  const newListItem = createItem(newTask);
  refs.listGroup.insertAdjacentHTML('afterbegin', newListItem);
  refs.form.reset();
};

const createNewTask = (title, body) => {
  const newTask = {
    _id: `task-${Math.random()}`,
    completed: false,
    body,
    title,
  };
  tasks.push(newTask);
  return newTask;
};

const onDelete = e => {
  if (e.target.classList.contains('delete-btn')) {
    const parent = e.target.closest('[data-key]');
    const keyForDelete = parent.dataset.key;
    console.log('parent->', parent);
    const confirmDelete = deleteTask(keyForDelete);
    deleteTaskFromHtml(confirmDelete, parent);
  }
};

const deleteTask = id => {
  const indexTaskForDelete = tasks.findIndex(task => task._id === id);
  const isConfirm = confirm(
    `Вы уверены?, что хотите удалить задачу ${tasks[indexTaskForDelete].title}`,
  );
  if (isConfirm) {
    tasks.splice(indexTaskForDelete, 1);
    console.log('tasks->', tasks);
  }
  return isConfirm;
};

const deleteTaskFromHtml = (confirmDelete, elem) => {
  if (confirmDelete) {
    elem.remove();
  }
};

const onChangeTheme = () => {
  const selectTheme = refs.selectTheme.value;
  lastSelectedTheme = selectTheme;
  setNewTheme(selectTheme);
  localStorage.setItem('theme', selectTheme);
};

const setNewTheme = theme => {
  const selectThemeStyle = themes[theme];
  Object.entries(selectThemeStyle).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

setNewTheme(lastSelectedTheme);

refs.listGroup.insertAdjacentHTML('beforeend', createAllListItem(tasks));
refs.form.addEventListener('submit', onFormSubmit);
refs.listGroup.addEventListener('click', onDelete);
refs.selectTheme.addEventListener('change', onChangeTheme);
