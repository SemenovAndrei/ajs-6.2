function getSpecial(obj) {
  const arr = [];

  obj.special.forEach((item) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = item;

    arr.push({
      id,
      name,
      icon,
      description,
    });
  });

  return arr;
}

export default getSpecial;
