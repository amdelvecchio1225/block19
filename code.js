const freelancerList = document.getElementById('list');
const averageStartingPriceSpan = document.getElementById('averagePrice');
const freelancers = [];
const names = ["Daniel", "Anthony", "Luke", "Abigail", "Jess", "Nicole", "Matt", "Alex", "Sarah", "Albert"];
const jobs = ["Graphic Designer", "Web Developer", "Content Creator", "Voice Actor", "Video Editor", "Photo Editor"]

function calculateAveragePrice() {
  if (freelancers.length === 0) {
    return 0;
  }
  
  let total = 0;

  for (let i = 0; i < freelancers.length; i++) {
    total += freelancers[i].price;
  }

  return total / freelancers.length;
}

function addDOM(freelancer) {
  const item = document.createElement('li');
  item.textContent = `${freelancer.name} - ${freelancer.job} - $${freelancer.price}`;
  freelancerList.appendChild(item);

  const averageStartingPrice = calculateAveragePrice();
  averageStartingPriceSpan.textContent = averageStartingPrice.toFixed(2);
}

function addFreelancer(name, job, price) {
  const newFreelancer = {
    name: name,
    job: job,
    price: price
  };

  freelancers.push(newFreelancer);
  addDOM(newFreelancer);
}

function newFreelancer() {
  const freelancerData = {
    name: names[Math.floor(Math.random() * names.length)],
    job: jobs[Math.floor(Math.random() * jobs.length)],
    price: Math.floor(Math.random() * 100) + 30
  };

  addFreelancer(freelancerData.name, freelancerData.job, freelancerData.price);
}

setInterval(newFreelancer, 5000);
