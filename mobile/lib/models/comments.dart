import 'package:mobile/models/author.dart';

class Comment {
  final String content, time;
  final Author author;
  List<Comment> replies;
  final int like;

  Comment(
    this.replies, {
    this.like = 0,
    required this.content,
    required this.author,
    required this.time,
  });
}

List<Comment> comments = [
  Comment(
    [
      Comment(
        [
          Comment(
            [],
            content: "Good idea",
            author: authors[1],
            time: "Dec 11",
          ),
        ],
        content: "Clever!",
        author: authors[0],
        time: "Dec 11",
      ),
      Comment(
        [],
        content: "Nice",
        author: authors[3],
        time: "Dec 11",
      ),
    ],
    content: "Good job",
    author: authors[1],
    time: "Dec 11",
  ),
  Comment(
    [
      Comment(
        [],
        content: "Huan is a good dog",
        author: authors[4],
        time: "Dec 11",
      ),
    ],
    content:
        "Ok, that's good.Ok, that's good. Ok, that's good. Ok, that's good. Ok, that's good. Ok, that's good. Ok, that's good. Ok, that's good.",
    author: authors[2],
    time: "Dec 11",
  ),
];
