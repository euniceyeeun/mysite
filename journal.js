let database = [
  {
    "title" : "With These Dog Eyes, I See",
    "date" : "29-11-2024",
    "img" : ["journal/dogs1.JPG","journal/dogs2.JPG"],
    "content" : "No description needed."
  },
  {
    "title" : "Thanksgiving in Zionsville",
    "date" : "28-11-2024",
    "img" : ["journal/indiana1.JPG"],
    "content" : "My first Thanksgiving in Indiana."
  },
  {
    "title" : "How To Sell Things on Facebook Marketplace",
    "date" : "27-11-2024",
    "img" : ["journal/fbm1.JPG","journal/fbm2.JPG","journal/fbm3.JPG","journal/fbm4.JPG"],
    "content" : "1. Take a picture of item you want to sell.<p>2. Choose a price dramatically under what item is worth.<p>3. Give your address to strangers and wait for item to be claimed."
  },
  {
    "title" : "My First and Last Day of Healthy Eating",
    "date" : "14-11-2024",
    "img" : ["journal/broccoli.JPG"],
    "content" : "Cutting broccoli is an art I have yet to master."
  },
]

const journal = document.getElementById('journal-container');

for (let i = 0; i < database.length; i++) {

  const entry = document.createElement('div');
  entry.classList.add('journal-entry');
  const entryTitle = document.createElement('div');
  entryTitle.classList.add('entry-title');
  entryTitle.innerHTML = database[i]['title'];
  const entryDate = document.createElement('div');
  entryDate.classList.add('entry-date');
  entryDate.innerHTML = database[i]['date'];
  const entryContent = document.createElement('div');
  entryContent.classList.add('entry-content');
  entryContent.innerHTML = database[i]['content'];

  const imgArray = document.createElement('div');
  imgArray.classList.add('entry-images');
  const imageCount = database[i]['img'].length;

  if (database[i]['img'] != "") {
    for (let j = 0; j < imageCount; j++) {
      const img = document.createElement('img');
      img.src = database[i]['img'][j];
      imgArray.appendChild(img);
    }
  }

  entry.appendChild(entryTitle);
  entry.appendChild(entryDate);
  entry.appendChild(imgArray);
  entry.appendChild(entryContent);
  journal.appendChild(entry);

}
