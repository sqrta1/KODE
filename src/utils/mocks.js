const getOTP = (login, password) => {

    if (login === 'kode@kode.ru' && password === 'Enk0deng') {
        return (
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
          );
    } 
    return null;
}

export default getOTP;