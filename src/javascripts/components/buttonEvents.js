const buttonEvents = () => {
  $('body').on('click', '.button', (e) => {
    const target = e.target.id;
    console.log(target);
  });
};

//   $('button').click((e => {
//     const target = e.target.id;
//   }));

//   if (target === )
// };

// export default { buttonEvents };

// $('#btnHealthy').click(( {
//   console.log("clicked", btn)
// }));

// const buttonEvents = () => {
//   $('#btnHealthy').on('click', () => {
//     console.log('clicked');
//   });
// };

// buttonEvents();

// console.log("hi");
export default { buttonEvents };
