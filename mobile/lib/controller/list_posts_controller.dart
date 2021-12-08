import 'dart:async';
import 'package:mobile/models/post.dart';

class ListPostsController {
  List<Post> _listPosts = [];
  final StreamController<List<Post>> _controller =
      StreamController<List<Post>>();

  Stream<List<Post>> get stream => _controller.stream;

  ListPostsController(List<Post> posts) {
    _listPosts = posts;
  }

  void init() {
    _controller.sink.add(_listPosts);
  }

  void dispose() {
    _controller.close();
  }
}
