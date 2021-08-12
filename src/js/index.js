import templates from "./templates";
import getNotificationsParams from  "./api";

const render = ({params, templateName}) => {
  const oldNotifications = document.querySelector('.notification');

  if (oldNotifications) oldNotifications.remove();

  const newNotifications = document.createElement(`div`);
  newNotifications.innerHTML = templates[templateName](params);

  document.body.prepend(newNotifications.firstChild);
}

document.querySelector('.trigger').addEventListener('click', () => render(getNotificationsParams()));