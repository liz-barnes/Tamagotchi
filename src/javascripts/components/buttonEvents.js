const buttonEvents = () => {
  $('button').click(e => {
    const target = e.target.id;
  });
};

export default { buttonEvents };
