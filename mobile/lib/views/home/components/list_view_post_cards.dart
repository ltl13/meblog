import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/controller/list_posts_controller.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/post_card.dart';

class ListViewPostCards extends StatefulWidget {
  const ListViewPostCards({
    Key? key,
  }) : super(key: key);
  @override
  State<ListViewPostCards> createState() => _ListViewPostCardsState();
}

class _ListViewPostCardsState extends State<ListViewPostCards> {
  final _listPostsController = ListPostsController(posts);

  @override
  void initState() {
    super.initState();
    _listPostsController.init();
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    _listPostsController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<Post>>(
        stream: _listPostsController.stream,
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return const Center(child: Icon(Icons.error));
          } else if (snapshot.hasData) {
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) => Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: myPadding,
                      vertical: myPadding / 2,
                    ),
                    child: PostCard(
                      style: PostCardStyle.landscape,
                      post: snapshot.data![index],
                    ),
                  ),
                  Divider(color: myStrokeColor, height: 1),
                ],
              ),
            );
          } else {
            return const Center(child: CircularProgressIndicator());
          }
        });
  }
}
