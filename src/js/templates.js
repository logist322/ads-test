export default templates = {
  firstTemplate: function(params) {
    const createNotificationTemplate = (param) => {
      return `<a href="#" class="notification__item" style="margin-top: 10px; padding: 10px; border-radius: 10px; border: 2px solid #000000; display: flex; flex-direction: column; width: 300px; font-family: Arial, sans-serif; font-size: 24px; text-decoration: none; color: #000000;">
          <p class="notification__title" style="margin: 0; padding: 0; font-size-adjust: 36px;">${param.title}</p>
          <p class="notification__description" style="margin: 0; padding: 0; margin-top: 10px; font-size-adjust: 24px;">${param.description}</p>
        </a>`
    };

    return `<div class="notification" style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column;">
      ${params ? params.map(param => createNotificationTemplate(param)).join('') : ''}
    </div>`
  },

  secondTemplate: function(params) {
    const createNotificationTemplate = (param) => {
      return `<a href="#" class="notification__item" style="margin-top: 10px; padding: 10px; border-radius: 10px; border: 2px solid #000000; display: flex; flex-direction: column; width: 300px; font-family: Arial, sans-serif; font-size: 24px; text-decoration: none; color: #ef7969;">
          <p class="notification__title" style="margin: 0; padding: 0; font-size-adjust: 36px;">${param.title}</p>
          <p class="notification__description" style="margin: 0; padding: 0; margin-top: 10px; font-size-adjust: 24px;">${param.description}</p>
        </a>`
    };

    return `<div class="notification" style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column;">
      ${params ? params.map(param => createNotificationTemplate(param)).join('') : ''}
    </div>`
  }
}

