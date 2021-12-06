import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/post_card.dart';

class ListViewPostCards extends StatelessWidget {
  const ListViewPostCards({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: posts.length,
      itemBuilder: (context, index) => Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: myPadding,
              vertical: myPadding / 2,
            ),
            child: PostCard(post: posts[index]),
          ),
          Divider(color: mySubHeadlineColor, thickness: .5),
        ],
      ),
    );
  }
}
