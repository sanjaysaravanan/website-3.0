const sectionOne = document.querySelector(".makeStyles-root-1");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    console.log(entry.target);
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
