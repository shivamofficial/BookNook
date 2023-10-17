const libraries = [
  {
    id: 1,
    name: "City Central Library",
    address: "123 Main Street",
    operationalHours: "Mon-Fri: 9 AM - 7 PM, Sat: 10 AM - 5 PM",
    history: "Established in 1965, City Central Library is the largest public library in the city.",
    services: "Free Wi-Fi, Study Rooms, Children's Section",
    imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3MZqnYJhZIfovZhrWniVPAZD9pmvkFfZkg&usqp=CAU",
    proximity: 1,
    popularity: 8,
    summary: "City Central Library is a hub for book lovers. With a vast collection of books, comfortable reading areas, and a range of services, it's the perfect place to spend your free time."
  },
  {
    id: 2,
    name: "Hillside Community Library",
    address: "456 Oak Avenue",
    operationalHours: "Mon-Fri: 10 AM - 6 PM, Sat: 11 AM - 4 PM",
    history: "Hillside Community Library serves the local community with a rich collection of books.",
    services: "Study Rooms, Reading Corners",
    imageUri: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-1290141.jpg&fm=jpg",
    proximity: 1,
    popularity: 4,
    summary: "Hillside Community Library is a welcoming place for readers of all ages. It offers quiet study rooms and cozy reading corners for a peaceful reading experience."
  },
  {
    id: 3,
    name: "Riverside Library",
    address: "789 River Road",
    operationalHours: "Mon-Thu: 8 AM - 6 PM, Fri: 8 AM - 4 PM, Sat: 9 AM - 3 PM",
    history: "Riverside Library is known for its scenic location by the river.",
    services: "Free Wi-Fi, Outdoor Seating, Book Clubs",
    imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMl4Dp3VKfGElnTewJvGwFUWU9645XVsEa6g&usqp=CAU",
    proximity: 2,
    popularity: 3,
    summary: "Riverside Library is a serene place where you can enjoy a good book by the river. It hosts book clubs and offers outdoor seating."
  },
  {
    id: 4,
    name: "Lakeview Public Library",
    address: "101 Lakefront Avenue",
    operationalHours: "Mon-Fri: 9 AM - 8 PM, Sat: 10 AM - 6 PM, Sun: 12 PM - 4 PM",
    history: "Lakeview Public Library offers a wide range of resources for all age groups.",
    services: "Free Wi-Fi, Children's Programs, Events",
    imageUri: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-1290141.jpg&fm=jpg",
    proximity: 2,
    popularity: 5,
    summary: "Lakeview Public Library is a vibrant community hub with programs for children and a wide range of events for everyone."
  },
  {
    id: 5,
    name: "Mountainview Library",
    address: "321 Summit Drive",
    operationalHours: "Mon-Fri: 10 AM - 7 PM, Sat: 11 AM - 5 PM",
    history: "Mountainview Library is nestled in the heart of the mountains.",
    services: "Reading Rooms, Computer Stations",
    imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qFLfA5KMoa3CMRB4CeMIb_ydD1hvwfWw1w&usqp=CAU",
    proximity: 3,
    popularity: 4,
    summary: "Mountainview Library offers a tranquil reading environment, with beautiful mountain views and convenient computer stations."
  },
  {
    id: 6,
    name: "Sunset Branch Library",
    address: "567 Westside Boulevard",
    operationalHours: "Mon-Thu: 9 AM - 6 PM, Fri: 9 AM - 5 PM, Sat: 10 AM - 4 PM",
    history: "Sunset Branch Library serves the diverse Westside community.",
    services: "Multilingual Collection, Teen Zone",
    imageUri: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-1290141.jpg&fm=jpg",
    proximity: 1,
    popularity: 6,
    summary: "Sunset Branch Library is a welcoming place with a diverse collection, including a multilingual section and a dedicated teen zone."
  },
  {
    id: 7,
    name: "Harborview Public Library",
    address: "234 Harbor Street",
    operationalHours: "Mon-Fri: 8 AM - 7 PM, Sat: 9 AM - 6 PM",
    history: "Harborview Public Library offers a harbor view from its reading area.",
    services: "Free Wi-Fi, Meeting Rooms, Quiet Study Areas",
    imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qFLfA5KMoa3CMRB4CeMIb_ydD1hvwfWw1w&usqp=CAU",
    proximity: 1,
    popularity: 9,
    summary: "Harborview Public Library is known for its peaceful reading areas with views of the harbor. It's a great place for quiet study and meetings."
  },
  {
    id: 8,
    name: "Green Valley Community Library",
    address: "789 Park Place",
    operationalHours: "Mon-Fri: 10 AM - 6 PM, Sat: 11 AM - 5 PM",
    history: "Green Valley Community Library is the heart of the Green Valley neighborhood.",
    services: "Storytime, Art Programs",
    imageUri: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-1290141.jpg&fm=jpg",
    proximity: 2,
    popularity: 2,
    summary: "Green Valley Community Library is a vibrant place with art programs and engaging storytime sessions for all ages."
  },
  {
    id: 9,
    name: "Woodland Public Library",
    address: "987 Forest Avenue",
    operationalHours: "Mon-Thu: 9 AM - 7 PM, Fri: 10 AM - 6 PM, Sat: 11 AM - 5 PM",
    history: "Woodland Public Library is surrounded by lush forests.",
    services: "Genealogy Research, Community Events",
    imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qFLfA5KMoa3CMRB4CeMIb_ydD1hvwfWw1w&usqp=CAU",
    proximity: 3,
    popularity: 4,
    summary: "Woodland Public Library is a haven for genealogy enthusiasts and hosts various community events. It's nestled in lush forests for a serene reading experience."
  },
  {
    id: 10,
    name: "Pinecrest Village Library",
    address: "543 Grove Road",
    operationalHours: "Mon-Fri: 9 AM - 6 PM, Sat: 10 AM - 4 PM",
    history: "Pinecrest Village Library is located in the heart of a historic village.",
    services: "Local History Collection, Book Sales",
    imageUri: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    proximity: 2,
    popularity: 6,
    summary: "Pinecrest Village Library is a treasure trove of local history. It's a must-visit for those interested in the village's heritage."
  }
];


export default libraries;
