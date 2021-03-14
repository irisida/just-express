axios({
  method: 'post',
  url: 'http://localhost:3000/ajax',
  data: {
    firstName: 'Swiss',
    lastName: 'Tony',
  },
  headers: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});
