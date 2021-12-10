import 'package:flutter/material.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/post/components/post_app_bar.dart';
import 'package:mobile/views/post/components/post_content.dart';

class PostScreen extends StatelessWidget {
  final Post post;
  const PostScreen({
    Key? key,
    required this.post,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      child: NestedScrollView(
        headerSliverBuilder: (context, _) => [const PostAppBar()],
        body: SingleChildScrollView(
          child: Column(
            children: [
              PostContent(post: post),
            ],
          ),
        ),
        
      ),
    );
  }
}
