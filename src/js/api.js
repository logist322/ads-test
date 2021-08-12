const createParams = () => {
  const params =  [];

  for (let i = 0; i <= Math.round(Math.random() * 3 + 1); i++) {
    params.push({
      title: Math.random() > 0.5 ? 'Title 1' : 'Title 2',
      description: Math.random() > 0.5 ? 'Description 1' : 'Description 2',
    })
  }

  return params;
}

export default getNotificationsParams = () => {
  return {
    templateName: Math.random() > 0.5 ? 'firstTemplate' : 'secondTemplate',
    params: createParams()
  }
}