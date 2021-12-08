class Author {
  final String name, username, description, image;

  Author({
    required this.name,
    required this.username,
    required this.description,
    required this.image,
  });
}

List<Author> authors = [
  Author(
    name: "Luan Le",
    username: "ltl13",
    description: "From University of Information Technology",
    image: "assets/images/author0.jpg",
  ),
  Author(
    name: "Trung Hieu",
    username: "hieuthuba",
    description: "The best front-end developer of the world",
    image: "assets/images/author1.jpg",
  ),
  Author(
    name: "Quoc Minh",
    username: "voquocmin",
    description: "Like memes and Cheems dog",
    image: "assets/images/author2.jpg",
  ),
  Author(
    name: "Nguyen Tran",
    username: "chamkam",
    description: "Depressive boy, always silent",
    image: "assets/images/author3.jpg",
  ),
  Author(
    name: "Christian Dan",
    username: "dan_codoc",
    description: "Christian pastor, our God, our soul",
    image: "assets/images/author4.jpg",
  ),
  Author(
    name: "Huan Nguyen",
    username: "alaska_dog",
    description: "Just a good dog from Alaska",
    image: "assets/images/author5.jpg",
  ),
  Author(
    name: "Name User",
    username: "name_user",
    description: "Another depressive boy, just keep going man",
    image: "assets/images/author6.jpg",
  ),
];
